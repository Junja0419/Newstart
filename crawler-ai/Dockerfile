FROM python:3.9-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    libnss3 \
    libatk-bridge2.0-0 \
    libgtk-3-0 \
    libgbm1 \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt
    # && \
    # pip install playwright && playwright install --with-deps

COPY . /app/

EXPOSE 8080
CMD ["uvicorn", "article_update_api:app", "--host", "0.0.0.0", "--port", "8080"]