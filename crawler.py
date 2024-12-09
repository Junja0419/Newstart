import logging
from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup
import requests
import json
import os

# 로깅 설정
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)


class NewsCrawler:
    HEADERS = {
        "User-Agent": (
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
            "AppleWebKit/605.1.15 (KHTML, like Gecko) "
            "Version/18.2 Safari/605.1.15"
        )
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

    def __init__(self, section_url, limit=3):
        """
        초기화 메서드

        Args:
            section_url (str): 크롤링할 뉴스 섹션의 URL
            limit (int, optional): 크롤링할 기사 수. 기본값은 3. 필요에 따라 조정 가능.
        """
        self.section_url = section_url
        self.news_data = []
        self.limit = limit  # 크롤링할 기사 수 제한
        self.playwright = sync_playwright().start()
        self.browser = self.playwright.chromium.launch(headless=True)
        self.page = self.browser.new_page()

    def fetch_news_list(self):
        """
        뉴스 리스트를 동기적으로 크롤링
        """
        try:
            response = requests.get(self.section_url, headers=self.HEADERS)
            response.raise_for_status()
            html_content = response.text
            soup = BeautifulSoup(html_content, "html.parser")

            ul = soup.select_one(self.LIST_SELECTORS["ul"])
            if not ul:
                logging.warning("페이지에서 뉴스 리스트를 찾을 수 없습니다.")
                return

            li_elements = ul.select(self.LIST_SELECTORS["li"])

            # 상위 N개 기사만 선택
            top_li_elements = li_elements[: self.limit]
            if len(li_elements) > self.limit:
                logging.info(
                    f"총 {len(li_elements)}개의 기사를 찾았습니다. 상위 {self.limit}개 기사를 선택합니다."
                )
            else:
                logging.info(
                    f"총 {len(li_elements)}개의 기사를 찾았습니다. 모든 기사를 선택합니다."
                )

            for li in top_li_elements:
                self.fetch_news_detail(li)

        except requests.RequestException as e:
            logging.error(f"뉴스 리스트를 가져오는 중 오류 발생: {e}")

    def fetch_news_detail(self, li_element):
        """
        Playwright를 사용하여 뉴스 상세 정보를 동기적으로 크롤링하며,
        이미지와 콘텐츠의 유무에 따라 각각 처리
        """
        title_element = li_element.select_one(self.LIST_SELECTORS["title"])
        link_element = li_element.select_one(self.LIST_SELECTORS["link"])
        press_element = li_element.select_one(self.LIST_SELECTORS["press"])

        # 필수 요소가 존재하는지 확인
        if not title_element or not link_element or not press_element:
            logging.warning("필수 요소 중 하나(title, link, press)가 누락되었습니다.")
            return

        title = title_element.get_text(strip=True)
        link = link_element.get("href")
        press = press_element.get_text(strip=True)

        try:
            # 페이지 이동
            self.page.goto(link, timeout=10000, wait_until="networkidle")

            # 기사 날짜, 시간 가져오기
            datetime_handle = self.page.query_selector(
                self.DETAIL_SELECTORS["datetime"]
            )
            if datetime_handle:
                datetime = datetime_handle.inner_text()
            else:
                datetime = None
                logging.warning(f"{link}의 날짜/시간 정보를 찾을 수 없습니다.")

            # 기사 내용 가져오기
            content_handle = self.page.query_selector(self.DETAIL_SELECTORS["content"])
            if content_handle:
                content = content_handle.inner_text()
            else:
                content = None
                logging.warning(f"{link}의 콘텐츠를 찾을 수 없습니다.")

            # 첫 번째 이미지 가져오기
            first_image_handle = self.page.query_selector(
                self.DETAIL_SELECTORS["images"]
            )
            if first_image_handle:
                first_image = first_image_handle.get_attribute("src")
            else:
                first_image = None
                logging.warning(f"{link}의 이미지를 찾을 수 없습니다.")

            # 이미지가 없을 경우 동영상 썸네일 가져오기
            if not first_image:
                video_thumbnail_handle = self.page.query_selector(
                    "div._VOD_PLAYER_WRAP"
                )
                if video_thumbnail_handle:
                    video_thumbnail = video_thumbnail_handle.get_attribute(
                        "data-cover-image-url"
                    )
                    first_image = video_thumbnail
                else:
                    first_image = None
                    logging.warning(f"{link}의 동영상 썸네일을 찾을 수 없습니다.")

            # 콘텐츠와 이미지가 모두 없는 경우 경고 출력
            if not content and not first_image:
                logging.error(f"{link}의 콘텐츠와 이미지를 모두 찾을 수 없습니다.")

            news_item = {
                "title": title,
                "link": link,
                "press": press,
                "datetime": datetime,
                "content": content,
                "first_image": first_image,
            }
            self.news_data.append(news_item)
            logging.info(f"처리된 뉴스 항목: {title}")

        except Exception as e:
            logging.error(f"{link}의 뉴스 상세 정보를 가져오는 중 오류 발생: {e}")

    def save_news_data(self, filename):
        """
        크롤링한 뉴스 데이터를 파일에 저장
        """
        try:
            os.makedirs(os.path.dirname(filename), exist_ok=True)
            with open(filename, "w", encoding="utf-8") as f:
                json.dump(self.news_data, f, ensure_ascii=False, indent=4)
            logging.info(f"뉴스 데이터를 {filename}에 성공적으로 저장했습니다.")
        except Exception as e:
            logging.error(f"뉴스 데이터를 저장하는 중 오류 발생: {e}")

    def close(self):
        """
        Playwright 세션 종료
        """
        self.browser.close()
        self.playwright.stop()
