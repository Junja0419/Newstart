import os
from dotenv import load_dotenv
from groq import Groq
import logging
import asyncio
import json

# 로깅 설정
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)

# API Key 설정
load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

client = Groq(api_key=GROQ_API_KEY)

# 프롬프트 설정
prompt_en = (
    "Task: Summarize a news article in Korean within 5 sentences, focusing only on the core message. Use simple Korean expressions to make difficult or technical phrases easier to understand. Present the main point of the article in the very first sentence.\n"
    "Context: The target audience consists of younger generations with lower literacy skills. The goal is to simplify complex news articles and make them more accessible through easy-to-read language.\n"
    "Persona: Stick strictly to the content of the news article provided and avoid including unrelated information.\n"
    "Format: Output the summary in the same text format as the input.\n"
    "Tone: Use simple and friendly language, ending sentences with '~해요'. Avoid using direct quotes, and rephrase all expressions to be more conversational and accessible."
)


async def update_content_with_ai(news_data):
    updated_news_data = []
    tasks = []

    for news_item in news_data:
        tasks.append(process_news_item_with_ai(news_item))

    results = await asyncio.gather(*tasks)
    for result in results:
        if result:
            updated_news_data.append(result)

    return updated_news_data


async def process_news_item_with_ai(news_item):
    try:
        messages = [
            {"role": "system", "content": prompt_en},
            {"role": "user", "content": news_item["content"]},
        ]

        response = client.chat.completions.create(
            model="gemma2-9b-it",
            messages=messages,
            max_tokens=1024,
            temperature=0.8,
        )
        summary = response.choices[0].message.content

        news_item["summary"] = summary
        logging.info(f"Successfully summarized article: {news_item['title']}")
        return news_item
    except Exception as e:
        logging.error(f"Error summarizing article '{news_item['title']}': {e}")
        return None


if __name__ == "__main__":
    filename = "news_data.json"
    with open(filename, "r", encoding="utf-8") as f:
        news_data = json.load(f)

    updated_news_data = asyncio.run(update_content_with_ai(news_data))

    with open("news_data.json", "w", encoding="utf-8") as f:
        json.dump(updated_news_data, f, ensure_ascii=False, indent=4)
    logging.info("Successfully updated and saved news data.")
