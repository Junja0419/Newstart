package com.project.newstart.service;

import com.project.newstart.dto.CallDTO;
import com.project.newstart.dto.HeadlineDTO;
import com.project.newstart.dto.SummaryDTO;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

@Service
public class CallService {

    private final HeadlineService headlineService;
    private final SummaryService summaryService;

    public CallService(HeadlineService headlineService, SummaryService summaryService) {
        this.headlineService = headlineService;
        this.summaryService = summaryService;
    }

    //Sechduling 어노테이션 붙여서 매 시간마다 메서드가 실행되게끔 코드 추가
    public void call_api() throws ParseException {

        //요청 보낼 URL
        String apiUrl = "https://newstart-968487038692.asia-northeast3.run.app/crawl_and_summarize_all";

        //restTemplate
        RestTemplate restTemplate = new RestTemplate();

        //날짜 포맷
        SimpleDateFormat format = new SimpleDateFormat("yyyy.MM.dd. a h:mm");

        //HTTP post 요청 보내기
        ResponseEntity<CallDTO> result = restTemplate.exchange(
                apiUrl,
                HttpMethod.POST,
                null,
                CallDTO.class
        );

        //result에서 헤드라인만 추출
        Map<String, Object> object = result.getBody().getResult();
        for(String category: object.keySet()) {
            JSONObject category_object = (JSONObject) object.get(category);
            JSONArray summaries = (JSONArray) category_object.get("summaries");
            for(int i=0; i<summaries.size(); i++) {
                JSONObject element = (JSONObject) summaries.get(i);
                String title = (String) element.get("title");
                String link = (String) element.get("link");
                String press = (String) element.get("press");
                Date datetime = format.parse((String) element.get("datetime"));
                String content = (String) element.get("content");
                String summary = (String) element.get("summary");

                //헤드라인 DTO 객체 생성
                HeadlineDTO headlineDTO = new HeadlineDTO();
                headlineDTO.setTitle(title);
                headlineDTO.setLink(link);
                headlineDTO.setPress(press);
                headlineDTO.setDate(datetime);
                headlineDTO.setContent(content);
                headlineDTO.setCategory(category);

                //헤드라인 서비스 호출
                headlineService.save_headline(headlineDTO);

                //요약 DTO 객체 생성
                SummaryDTO summaryDTO = new SummaryDTO();
                summaryDTO.setTitle(title);
                summaryDTO.setLink(link);
                summaryDTO.setDate(datetime);
                summaryDTO.setContent(summary);

                //요약 서비스 호출
                summaryService.save_summary(summaryDTO);
            }
        }
    }
}
