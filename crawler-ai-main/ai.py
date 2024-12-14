import os
from groq import Groq
import logging
import json

# 로깅 설정
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)

# 환경 변수 로드 및 API 키 설정
GROQ_API_KEY_MAIN = os.environ.get("GROQ_API_KEY_MAIN")

if not GROQ_API_KEY_MAIN:
    logging.error("GROQ_API_KEY_MAIN가 환경 변수에 설정되어 있지 않습니다.")
    raise ValueError("GROQ_API_KEY_MAIN가 환경 변수에 설정되어 있지 않습니다.")

# Groq 클라이언트 초기화
client = Groq(api_key=GROQ_API_KEY_MAIN)

# 프롬프트 설정 (한국어로 변경)
prompt_kr = (
    "Task: 한국어로 된 뉴스 기사를 5문장 이내로 요약해 주세요. 핵심 메시지에만 집중하고, 어려운 용어나 기술적인 표현은 간단한 한국어로 바꿔서 이해하기 쉽게 작성해 주세요. 기사 요약의 주된 내용을 첫 문장에 제시해 주세요.\n"
    "Context: 대상 독자는 문해력이 낮은 젊은 세대입니다. 복잡한 뉴스 기사를 쉽게 읽을 수 있는 언어로 단순화하여 접근성을 높이는 것이 목표입니다.\n"
    "Persona: 제공된 뉴스 기사의 내용에 엄격히 고수하고, 관련 없는 정보는 포함하지 마세요.\n"
    "Format: 입력과 동일한 텍스트 형식으로 요약을 출력해 주세요.\n"
    "Tone: 간단하고 친근한 언어를 사용하며, 문장을 '~해요'로 끝내세요. 직접적인 인용문을 사용하지 말고, 모든 표현을 대화체로 바꿔 더 쉽게 이해할 수 있도록 해 주세요."
)


def summarize_article(content):
    """
    주어진 뉴스 기사 내용을 요약합니다.

    Args:
        content (str): 뉴스 기사 내용.

    Returns:
        str: 요약된 뉴스 기사 내용.
    """
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
            return ""

        if not hasattr(response, "choices") or not response.choices:
            logging.error("AI API 응답 구조가 올바르지 않습니다.")
            return ""

        summary = response.choices[0].message.content.strip()

        if not summary:
            logging.error("AI API로부터 빈 요약을 받았습니다.")
            return ""

        return summary

    except Exception as e:
        logging.error(f"요약 중 예외 발생: {e}")
        return ""


def update_content_with_ai(news_data):
    """
    뉴스 데이터를 받아 각 기사를 요약합니다.

    Args:
        news_data (list): 크롤링된 뉴스 데이터 리스트.

    Returns:
        list: 요약된 뉴스 데이터 리스트.
    """
    updated_news_data = []
    for news_item in news_data:
        if "content" not in news_item or not news_item["content"].strip():
            logging.warning(
                f"기사 '{news_item.get('title', '제목 없음')}'에 요약할 내용이 없습니다."
            )
            updated_news_data.append(news_item)
            continue

        summary = summarize_article(news_item["content"])
        if summary:
            news_item["summary"] = summary
            logging.info(
                f"기사 '{news_item['title']}'의 요약이 성공적으로 완료되었습니다."
            )
        else:
            logging.warning(f"기사 '{news_item['title']}'의 요약에 실패했습니다.")

        updated_news_data.append(news_item)
    return updated_news_data


if __name__ == "__main__":
    filename = "news_data.json"
    if not os.path.exists(filename):
        logging.error(f"파일 '{filename}'이 존재하지 않습니다.")
        exit(1)

    with open(filename, "r", encoding="utf-8") as f:
        try:
            news_data = json.load(f)
            logging.info(
                f"파일 '{filename}'에서 {len(news_data)}개의 기사를 로드했습니다."
            )
        except json.JSONDecodeError as e:
            logging.error(f"파일 '{filename}'의 JSON 디코딩 오류: {e}")
            exit(1)

    updated_news_data = update_content_with_ai(news_data)

    output_filename = "news_data_updated.json"
    with open(output_filename, "w", encoding="utf-8") as f:
        json.dump(updated_news_data, f, ensure_ascii=False, indent=4)
    logging.info(f"요약된 뉴스 데이터를 '{output_filename}'에 성공적으로 저장했습니다.")
