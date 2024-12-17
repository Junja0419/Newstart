package com.project.newstart.controller;

import com.project.newstart.dto.CustomUserDetails;
import com.project.newstart.entity.Headline;
import com.project.newstart.entity.UserEntity;
import com.project.newstart.repository.UserRepository;
import com.project.newstart.service.HeadlineService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class HeadlineController {

    private final HeadlineService headlineService;
    private final UserRepository userRepository;

    public HeadlineController(HeadlineService headlineService, UserRepository userRepository) {
        this.headlineService = headlineService;
        this.userRepository = userRepository;
    }

    //헤드라인 기사 조회
    @GetMapping("/api/headline/{headline_id}/{user_id}")
    public ResponseEntity<Map<String, Object>> headlineDetail(@PathVariable("headline_id") Long headline_id, @PathVariable("user_id") Long user_id) {

        //헤드라인 기사 정보
        Headline headline = headlineService.view_detail(headline_id);

        Map<String, Object> entitys = new HashMap<>();

        entitys.put("headline", headline);
        
        //사용자가 해당 기사를 북마크했는지 여부 전달
        String bookmark_yn = headlineService.bookmarkYN(user_id, headline_id);
        entitys.put("bookmark_yn", bookmark_yn);

        return ResponseEntity.ok().body(entitys);
    }
}
