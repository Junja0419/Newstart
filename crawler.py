import asyncio
import logging
from playwright.async_api import async_playwright
from bs4 import BeautifulSoup
import aiohttp
import json

# 로깅 설정
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)


class NewsCrawler:
    HEADERS = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.2 Safari/605.1.15"
    }

    LIST_SELECTORS = {
        "ul": 'ul[id^="_SECTION_HEADLINE_LIST"]',
        "li": ".sa_item",
        "title": "a.sa_text_title",
        "link": "a.sa_text_title[href]",
        "press": "div.sa_text_press",
    }

    DETAIL_SELECTORS = {
        "datetime": "span.media_end_head_info_datestamp_time._ARTICLE_DATE_TIME",
        "content": "article#dic_area",
        "images": "span.end_photo_org img",
    }

    def __init__(self, section_url):
        self.section_url = section_url
        self.news_data = []

    async def fetch_news_list(self):
        """
        뉴스 리스트를 비동기적으로 크롤링
        """
        try:
            async with aiohttp.ClientSession() as session:
                async with session.get(
                    self.section_url, headers=self.HEADERS
                ) as response:
                    response.raise_for_status()
                    html_content = await response.text()
                    soup = BeautifulSoup(html_content, "html.parser")

                    ul = soup.select_one(self.LIST_SELECTORS["ul"])
                    if not ul:
                        logging.warning("No news list found on the page.")
                        return

                    li_elements = ul.select(self.LIST_SELECTORS["li"])
                    tasks = [self.fetch_news_detail(li) for li in li_elements]
                    await asyncio.gather(*tasks)

        except aiohttp.ClientError as e:
            logging.error(f"Error fetching news list: {e}")

    async def fetch_news_detail(self, li_element):
        """
        Playwright를 사용하여 뉴스 상세 정보를 크롤링하며,
        이미지와 콘텐츠의 유무에 따라 각각 처리
        """
        title = li_element.select_one(self.LIST_SELECTORS["title"]).text.strip()
        link = li_element.select_one(self.LIST_SELECTORS["link"]).get("href")
        press = li_element.select_one(self.LIST_SELECTORS["press"]).text.strip()

        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            page = await browser.new_page()

            try:
                # 페이지 이동
                await page.goto(link, timeout=10000, wait_until="networkidle")

                # 기사 날짜, 시간 가져오기
                datetime_handle = await page.query_selector(
                    self.DETAIL_SELECTORS["datetime"]
                )
                if datetime_handle:
                    datetime = await datetime_handle.inner_text()
                else:
                    datetime = None
                    logging.warning(f"Datetime not found for {link}")

                # 기사 내용 가져오기
                content_handle = await page.query_selector(
                    self.DETAIL_SELECTORS["content"]
                )
                if content_handle:
                    content = await content_handle.inner_text()
                else:
                    content = None
                    logging.warning(f"Content not found for {link}")

                # 첫 번째 이미지 가져오기
                first_image_handle = await page.query_selector(
                    self.DETAIL_SELECTORS["images"]
                )
                if first_image_handle:
                    first_image = await first_image_handle.get_attribute("src")
                else:
                    first_image = None
                    logging.warning(f"Image not found for {link}")

                # 동영상 썸네일 가져오기 (이미지가 없을 경우)
                if not first_image:
                    video_thumbnail_handle = await page.query_selector(
                        "div._VOD_PLAYER_WRAP"
                    )
                    if video_thumbnail_handle:
                        video_thumbnail = await video_thumbnail_handle.get_attribute(
                            "data-cover-image-url"
                        )
                        first_image = video_thumbnail
                    else:
                        first_image = None
                        logging.warning(f"Video thumbnail not found for {link}")

                # 콘텐츠와 이미지가 모두 없는 경우 경고 출력
                if not content and not first_image:
                    logging.error(f"Both content and image are missing for {link}")

                news_item = {
                    "title": title,
                    "link": link,
                    "press": press,
                    "datetime": datetime,
                    "content": content,
                    "first_image": first_image,
                }
                self.news_data.append(news_item)
                logging.info(f"Processed news item: {title}")

            except Exception as e:
                logging.error(f"Error fetching news detail from {link}: {e}")

            finally:
                await browser.close()

    def save_news_data(self, filename):
        """
        크롤링한 뉴스 데이터를 파일에 저장
        """
        try:
            with open(filename, "w", encoding="utf-8") as f:
                json.dump(self.news_data, f, ensure_ascii=False, indent=4)
            logging.info(f"Successfully saved news data to {filename}")
        except Exception as e:
            logging.error(f"Error saving news data: {e}")


if __name__ == "__main__":
    section_url = "https://news.naver.com/section/100"
    crawler = NewsCrawler(section_url)
    asyncio.run(crawler.fetch_news_list())
    crawler.save_news_data("news_data.json")
