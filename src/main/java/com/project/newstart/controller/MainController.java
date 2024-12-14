package com.project.newstart.controller;

import com.project.newstart.dto.CustomUserDetails;
import com.project.newstart.entity.Headline;
import com.project.newstart.entity.Summary;
import com.project.newstart.entity.UserEntity;
import com.project.newstart.repository.UserRepository;
import com.project.newstart.service.CallService;
import com.project.newstart.service.HeadlineService;
import com.project.newstart.service.SummaryService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class MainController {

    private final HeadlineService headlineService;
    private final SummaryService summaryService;
    private final UserRepository userRepository;


    public MainController(HeadlineService headlineService, SummaryService summaryService, UserRepository userRepository) {
        this.headlineService = headlineService;
        this.summaryService = summaryService;
        this.userRepository = userRepository;
    }

    @GetMapping("/")
    public ResponseEntity<Map<String, Object>> mainPage() {

        Map<String, Object> entitys = new HashMap<>();

        CustomUserDetails user = (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserEntity userEntity = userRepository.findByUsername(user.getUsername());
        
        //사용자 정보를 찾을 수 없다면
        if(userEntity == null) {
            return ResponseEntity.notFound().build();
        } else {
            List<Headline> headline = headlineService.views();

            List<Summary> summary = summaryService.views();

            entitys.put("userentity", userEntity);
            entitys.put("headline", headline);
            entitys.put("summary", summary);

            return ResponseEntity.ok().body(entitys);
        }
    }
}
