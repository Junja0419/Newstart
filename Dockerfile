# Build stage
FROM python:3.9-slim AS build

WORKDIR /app

# 시스템 패키지 설치
RUN apt-get update && apt-get install -y \
    libnss3 \
    libatk-bridge2.0-0 \
    libgtk-3-0 \
    libgbm1 \
    # build-essential \
    # libssl-dev \ 
    # libffi-dev \
    # python3-dev \
    && rm -rf /var/lib/apt/lists/*

# Python 의존성 설치
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Playwright 브라우저 설치
RUN pip install playwright && playwright install --with-deps

# 애플리케이션 코드 복사
COPY . .

# Run stage
FROM python:3.9-slim

WORKDIR /app

# 빌드 스테이지에서 애플리케이션 파일 복사
COPY --from=build /app /app

# 포트 설정
EXPOSE 8080

# 애플리케이션 실행
CMD ["python", "api.py"]