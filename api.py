from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os
import logging
import asyncio
from crawler import NewsCrawler  # 크롤러 모듈 가져오기
from ai import update_content_with_ai  # AI 모듈 가져오기
import json

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


@app.post("/crawl")
async def crawl_news(request: SectionRequest):
    if request.section not in SECTIONS:
        raise HTTPException(status_code=400, detail="Invalid section")

    base_url = SECTIONS[request.section]
    crawler = NewsCrawler(base_url)
    await crawler.fetch_news_list()
    filename = os.path.join(DATA_DIRECTORY, f"{request.section}_news.json")
    crawler.save_news_data(filename)

    return {"message": "Crawling completed", "filename": filename}


@app.post("/summarize")
async def summarize_news(request: SectionRequest):
    filename = os.path.join(DATA_DIRECTORY, f"{request.section}_news.json")

    if not os.path.exists(filename):
        raise HTTPException(status_code=404, detail="News data file not found")

    with open(filename, "r", encoding="utf-8") as f:
        news_data = json.load(f)

    updated_news_data = await update_content_with_ai(news_data)

    updated_filename = os.path.join(
        DATA_DIRECTORY, f"{request.section}_updated_news.json"
    )
    with open(updated_filename, "w", encoding="utf-8") as f:
        json.dump(updated_news_data, f, ensure_ascii=False, indent=4)

    return {"message": "Summarization completed", "filename": updated_filename}


@app.post("/crawl_and_summarize")
async def crawl_and_summarize(request: SectionRequest):
    if request.section not in SECTIONS:
        raise HTTPException(status_code=400, detail="Invalid section")

    # 크롤링
    base_url = SECTIONS[request.section]
    crawler = NewsCrawler(base_url)
    await crawler.fetch_news_list()
    filename = os.path.join(DATA_DIRECTORY, f"{request.section}_news.json")
    crawler.save_news_data(filename)

    # 요약, 문체 변환
    with open(filename, "r", encoding="utf-8") as f:
        news_data = json.load(f)

    updated_news_data = await update_content_with_ai(news_data)

    with open(filename, "w", encoding="utf-8") as f:
        json.dump(updated_news_data, f, ensure_ascii=False, indent=4)

    return {
        "message": "Crawling and summarization completed",
        "crawl_filename": filename,
        "summarize_filename": filename,
    }


if __name__ == "__main__":
    import uvicorn

    if not os.path.exists(DATA_DIRECTORY):
        os.makedirs(DATA_DIRECTORY)
    uvicorn.run(app, host="0.0.0.0", port=5500)
