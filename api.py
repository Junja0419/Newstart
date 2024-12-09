from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os
import logging
import json
from crawler import NewsCrawler  # 동기 크롤러 모듈 가져오기
from ai import update_content_with_ai  # AI 모듈 가져오기

# 로깅 설정
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)

app = FastAPI()

DATA_DIRECTORY = "./data"  # JSON 파일 저장 경로

SECTIONS = {
    "politics": "https://news.naver.com/section/100",  # 정치
    "economy": "https://news.naver.com/section/101",  # 경제
    "society": "https://news.naver.com/section/102",  # 사회
    "lifestyle_culture": "https://news.naver.com/section/103",  # 생활/문화
    "world": "https://news.naver.com/section/104",  # 세계
    "it_science": "https://news.naver.com/section/105",  # IT/과학
}


# 요청 바디 스키마 정의
class SectionRequest(BaseModel):
    section: str

@app.get("/healthz")
def health_check():
    return {"status": "ok"}

@app.post("/crawl")
def crawl_news(request: SectionRequest):
    if request.section not in SECTIONS:
        raise HTTPException(status_code=400, detail="Invalid section")

    base_url = SECTIONS[request.section]
    crawler = NewsCrawler(base_url, limit=3)  # 상위 3개 기사 크롤링
    crawler.fetch_news_list()
    filename = os.path.join(DATA_DIRECTORY, f"{request.section}_news.json")
    crawler.save_news_data(filename)
    crawler.close()

    logging.info(
        f"Crawling completed for section: {request.section}, saved to {filename}"
    )

    return {"message": "Crawling completed", "filename": filename}


@app.post("/summarize")
def summarize_news(request: SectionRequest):
    filename = os.path.join(DATA_DIRECTORY, f"{request.section}_news.json")

    if not os.path.exists(filename):
        raise HTTPException(status_code=404, detail="News data file not found")

    with open(filename, "r", encoding="utf-8") as f:
        news_data = json.load(f)

    logging.info(f"Summarizing news data for section: {request.section}")

    updated_news_data = update_content_with_ai(news_data)

    updated_filename = os.path.join(
        DATA_DIRECTORY, f"{request.section}_updated_news.json"
    )
    with open(updated_filename, "w", encoding="utf-8") as f:
        json.dump(updated_news_data, f, ensure_ascii=False, indent=4)

    logging.info(
        f"Summarization completed for section: {request.section}, saved to {updated_filename}"
    )

    return {
        "message": "Summarization completed",
        "filename": updated_filename,
        "summaries": updated_news_data,  # 요약된 데이터를 응답에 포함
    }


@app.post("/crawl_and_summarize")
def crawl_and_summarize(request: SectionRequest):
    if request.section not in SECTIONS:
        raise HTTPException(status_code=400, detail="Invalid section")

    # 크롤링
    base_url = SECTIONS[request.section]
    crawler = NewsCrawler(base_url, limit=3)  # 상위 3개 기사 크롤링
    crawler.fetch_news_list()
    filename = os.path.join(DATA_DIRECTORY, f"{request.section}_news.json")
    crawler.save_news_data(filename)

    logging.info(
        f"Crawling completed for section: {request.section}, saved to {filename}"
    )

    # 요약, 문체 변환
    with open(filename, "r", encoding="utf-8") as f:
        news_data = json.load(f)

    logging.info(f"Summarizing news data for section: {request.section}")

    updated_news_data = update_content_with_ai(news_data)

    updated_filename = os.path.join(
        DATA_DIRECTORY, f"{request.section}_updated_news.json"
    )
    with open(updated_filename, "w", encoding="utf-8") as f:
        json.dump(updated_news_data, f, ensure_ascii=False, indent=4)

    logging.info(
        f"Summarization completed for section: {request.section}, saved to {updated_filename}"
    )

    crawler.close()

    return {
        "message": "Crawling and summarization completed",
        "crawl_filename": filename,
        "summarize_filename": updated_filename,
        "summaries": updated_news_data,  # 요약된 데이터를 응답에 포함
    }


@app.post("/crawl_and_summarize_all")
def crawl_and_summarize_all():
    results = {}
    for section, url in SECTIONS.items():
        try:
            logging.info(f"Processing section: {section}")

            # 크롤링
            crawler = NewsCrawler(url, limit=3)  # 상위 3개 기사 크롤링
            crawler.fetch_news_list()
            filename = os.path.join(DATA_DIRECTORY, f"{section}_news.json")
            crawler.save_news_data(filename)

            logging.info(
                f"Crawling completed for section: {section}, saved to {filename}"
            )

            # 요약, 문체 변환
            with open(filename, "r", encoding="utf-8") as f:
                news_data = json.load(f)

            logging.info(f"Summarizing news data for section: {section}")

            updated_news_data = update_content_with_ai(news_data)

            updated_filename = os.path.join(
                DATA_DIRECTORY, f"{section}_updated_news.json"
            )
            with open(updated_filename, "w", encoding="utf-8") as f:
                json.dump(updated_news_data, f, ensure_ascii=False, indent=4)

            logging.info(
                f"Summarization completed for section: {section}, saved to {updated_filename}"
            )

            crawler.close()

            results[section] = {
                "crawl_filename": filename,
                "summarize_filename": updated_filename,
                "summaries": updated_news_data,  # 요약된 데이터를 결과에 포함
                "status": "success",
            }

        except Exception as e:
            logging.error(f"Error processing section {section}: {e}")
            results[section] = {"error": str(e)}

    return {
        "message": "Crawling and summarization completed for all sections.",
        "results": results,
    }


if __name__ == "__main__":
    import uvicorn

    if not os.path.exists(DATA_DIRECTORY):
        os.makedirs(DATA_DIRECTORY)
    port = int(os.environ.get("PORT", 8080))
    uvicorn.run(app, host="0.0.0.0", port=port)
