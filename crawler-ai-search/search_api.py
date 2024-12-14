import os
import logging
import urllib.request
from playwright.sync_api import sync_playwright
import json
from groq import Groq
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

# 로깅 설정
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)

app = FastAPI(title="newstart-search API")


# Pydantic 모델 정의
class SearchRequest(BaseModel):
    keyword: str


class CrawlRequest(BaseModel):
    article_url: str


class CrawlResponse(BaseModel):
    title: str
    link: str
    press: str
    datetime: str
    content: str
    first_image: str
    summary: str = None


# API 검색 함수
def api_search(keyword):
    # 환경 변수에서 API 키 가져오기
    client_id = os.environ.get("NAVER_CLIENT_ID")
    client_secret = os.environ.get("NAVER_CLIENT_SECRET")

    if not client_id or not client_secret:
        logging.error("Naver API credentials not set in environment variables.")
        raise EnvironmentError(
            "Naver API credentials not set in environment variables."
        )

    encText = urllib.parse.quote(keyword)
    url = f"https://openapi.naver.com/v1/search/news.json?query={encText}&sort=date"  # JSON 결과
    request = urllib.request.Request(url)
    request.add_header("X-Naver-Client-Id", client_id)
    request.add_header("X-Naver-Client-Secret", client_secret)
    try:
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if rescode == 200:
            response_body = response.read()
            return response_body.decode("utf-8")
        else:
            logging.error(f"API 검색 실패: Error Code {rescode}")
            return f"Error Code: {rescode}"
    except Exception as e:
        logging.error(f"API 검색 중 오류 발생: {e}")
        return f"Error: {str(e)}"


# 뉴스 크롤링 함수
def crawl(article_url):
    SELECTORS = {
        "title": "#title_area > span",
        "press": "a.media_end_head_top_logo img",
        "datetime": "span.media_end_head_info_datestamp_time._ARTICLE_DATE_TIME",
        "content": "article#dic_area",
        "images": "span.end_photo_org img",
    }

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # 페이지 이동
            page.goto(article_url, timeout=10000, wait_until="networkidle")

            news_item = {}

            # 기사 제목 추출
            title_handle = page.query_selector(SELECTORS["title"])
            if title_handle:
                title = title_handle.inner_text().strip()
            else:
                title = None
                logging.warning(f"{article_url}의 기사 제목을 찾을 수 없습니다.")

            # 언론사 추출
            press_handle = page.query_selector(SELECTORS["press"])
            if press_handle:
                press_alt = press_handle.get_attribute("alt")
                press_title = press_handle.get_attribute("title")
                press = (
                    press_alt if press_alt else press_title if press_title else "N/A"
                )
            else:
                press = None
                logging.warning(f"{article_url}의 언론사 정보를 찾을 수 없습니다.")

            # 날짜 및 시간 추출
            datetime_handle = page.query_selector(SELECTORS["datetime"])
            if datetime_handle:
                datetime = datetime_handle.inner_text().strip()
            else:
                datetime = None
                logging.warning(f"{article_url}의 날짜 및 시간을 찾을 수 없습니다.")

            # 내용 추출
            content_handle = page.query_selector(SELECTORS["content"])
            if content_handle:
                content = content_handle.inner_text().strip()
            else:
                content = None
                logging.warning(f"{article_url}의 기사 내용을 찾을 수 없습니다.")

            # 첫 번째 이미지 추출
            first_image_handle = page.query_selector(SELECTORS["images"])
            if first_image_handle:
                first_image_src = first_image_handle.get_attribute("src")
                first_image = first_image_src if first_image_src else None
            else:
                # 이미지가 없을 경우 동영상 썸네일 추출
                video_thumbnail_handle = page.query_selector("div._VOD_PLAYER_WRAP")
                if video_thumbnail_handle:
                    video_thumbnail = video_thumbnail_handle.get_attribute(
                        "data-cover-image-url"
                    )
                    first_image = video_thumbnail if video_thumbnail else None
                else:
                    first_image = None
                    logging.warning(
                        f"{article_url}의 동영상 썸네일을 찾을 수 없습니다."
                    )

            # 콘텐츠와 이미지가 모두 없는 경우 경고 출력
            if not content and not first_image:
                logging.error(
                    f"{article_url}의 콘텐츠와 이미지를 모두 찾을 수 없습니다."
                )

            logging.info(f"처리된 뉴스 항목: {title}")

            news_item = {
                "title": title,
                "link": article_url,
                "press": press,
                "datetime": datetime,
                "content": content,
                "first_image": first_image,
            }
            return news_item

        except Exception as e:
            logging.error(
                f"{article_url}의 뉴스 상세 정보를 가져오는 중 오류 발생: {e}"
            )
            return {"error": str(e)}
        finally:
            browser.close()


# 뉴스 요약 함수
def summarize_content(content):
    # 환경 변수 로드 및 API 키 설정
    GROQ_API_KEY_SEARCH = os.environ.get("GROQ_API_KEY_SEARCH")
    if not GROQ_API_KEY_SEARCH:
        logging.error("GROQ_API_KEY_SEARCH가 환경 변수에 설정되어 있지 않습니다.")
        raise ValueError("GROQ_API_KEY_SEARCH가 환경 변수에 설정되어 있지 않습니다.")

    # Groq 클라이언트 초기화
    client = Groq(api_key=GROQ_API_KEY_SEARCH)

    # 프롬프트 설정 (한국어로 변경)
    prompt_kr = (
        "Task: 한국어로 된 뉴스 기사를 5문장 이내로 요약해 주세요. 핵심 메시지에만 집중하고, 어려운 용어나 기술적인 표현은 간단한 한국어로 바꿔서 이해하기 쉽게 작성해 주세요. 기사 요약의 주된 내용을 첫 문장에 제시해 주세요.\n"
        "Context: 대상 독자는 문해력이 낮은 젊은 세대입니다. 복잡한 뉴스 기사를 쉽게 읽을 수 있는 언어로 단순화하여 접근성을 높이는 것이 목표입니다.\n"
        "Persona: 제공된 뉴스 기사의 내용에 엄격히 고수하고, 관련 없는 정보는 포함하지 마세요.\n"
        "Format: 입력과 동일한 텍스트 형식으로 요약을 출력해 주세요.\n"
        "Tone: 간단하고 친근한 언어를 사용하며, 문장을 '~해요'로 끝내세요. 직접적인 인용문을 사용하지 말고, 모든 표현을 대화체로 바꿔 더 쉽게 이해할 수 있도록 해 주세요."
    )

    try:
        messages = [
            {"role": "system", "content": prompt_kr},
            {"role": "user", "content": content},
        ]

        response = client.chat.completions.create(
            model="gemma2-9b-it",
            messages=messages,
            temperature=0.6,
        )

        if not response:
            logging.error("AI API로부터 응답이 없습니다.")
            return None

        if not hasattr(response, "choices") or not response.choices:
            logging.error("AI API 응답 구조가 올바르지 않습니다.")
            return None

        summary = response.choices[0].message.content.strip()

        if not summary:
            logging.error("AI API로부터 빈 요약을 받았습니다.")
            return None

        logging.info("뉴스 요약 완료.")
        return summary

    except Exception as e:
        logging.error(f"요약 중 예외 발생: {e}")
        return None


# /search 엔드포인트
@app.post("/search", response_model=list)
def search_news(request: SearchRequest):
    keyword = request.keyword
    logging.info(f"뉴스 검색 키워드: {keyword}")
    search_results = api_search(keyword)

    try:
        search_data = json.loads(search_results)
        items = search_data.get("items", [])
        return items
    except json.JSONDecodeError as e:
        logging.error(f"검색 결과 JSON 파싱 오류: {e}")
        raise HTTPException(
            status_code=500, detail="검색 결과를 파싱하는 중 오류가 발생했습니다."
        )


# /crawl 엔드포인트
@app.post("/crawl", response_model=CrawlResponse)
def crawl_article(request: CrawlRequest):
    article_url = request.article_url
    logging.info(f"뉴스 크롤링 URL: {article_url}")
    crawl_result = crawl(article_url)

    if "error" in crawl_result:
        raise HTTPException(status_code=500, detail=crawl_result["error"])

    return crawl_result


# /crawl_and_summarize 엔드포인트
@app.post("/crawl_and_summarize", response_model=CrawlResponse)
def crawl_and_summarize_article(request: CrawlRequest):
    article_url = request.article_url
    logging.info(f"뉴스 크롤링 및 요약을 위한 URL: {article_url}")

    # 크롤링
    crawl_result = crawl(article_url)

    if "error" in crawl_result:
        raise HTTPException(status_code=500, detail=crawl_result["error"])

    content = crawl_result.get("content", "")
    if not content:
        logging.error("크롤링된 콘텐츠가 없습니다.")
        raise HTTPException(status_code=500, detail="크롤링된 콘텐츠가 없습니다.")

    # 요약
    summary = summarize_content(content)
    crawl_result["summary"] = summary

    return crawl_result


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8080)
