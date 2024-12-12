# 네이버 검색 API 예제 - 블로그 검색
import os
import sys
import urllib.request

# TODO: client_id, client_secret 환경변수로 변경
client_id = "bMUS1Ahsa1IFfzfnDPM4"
client_secret = "SGKOL7SslN"

# 검색할 keyword
input_text = "계엄령"

encText = urllib.parse.quote(input_text)
url = f"https://openapi.naver.com/v1/search/news.json?query={encText}&sort=date"  # JSON 결과
request = urllib.request.Request(url)
request.add_header("X-Naver-Client-Id", client_id)
request.add_header("X-Naver-Client-Secret", client_secret)
response = urllib.request.urlopen(request)
rescode = response.getcode()
if rescode == 200:
    response_body = response.read()
    print(response_body.decode("utf-8"))
else:
    print("Error Code:" + rescode)
