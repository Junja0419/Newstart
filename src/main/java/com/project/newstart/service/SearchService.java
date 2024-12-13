package com.project.newstart.service;

import com.project.newstart.dto.CustomUserDetails;
import com.project.newstart.entity.Headline;
import com.project.newstart.entity.Search;
import com.project.newstart.entity.UserEntity;
import com.project.newstart.repository.HeadlineRepository;
import com.project.newstart.repository.SearchRepository;
import com.project.newstart.repository.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class SearchService {
    private final SearchRepository searchRepository;
    private final HeadlineRepository headlineRepository;
    private final UserRepository userRepository;

    public SearchService(SearchRepository searchRepository, HeadlineRepository headlineRepository, UserRepository userRepository) {
        this.searchRepository = searchRepository;
        this.headlineRepository = headlineRepository;
        this.userRepository = userRepository;
    }

    public List<Search> getSearchById(Long id) {
        List<Search> searches = searchRepository.getSearchById(id);

        return searches;
    }

    public List<Headline> getSearchResult(String keyword) {

        //검색 api url
        String apiUrl = "";

        RestTemplate restTemplate = new RestTemplate();

        List<Headline> headlines = headlineRepository.findByKeyword(keyword);
        
        //검색db에 기록 저장하는 코드 추가 content, user
        //사용자 정보
        CustomUserDetails user = (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserEntity userEntity = userRepository.findByUsername(user.getUsername());

        Search data = searchRepository.findByUserContent(userEntity.getId(), keyword);

        String content = keyword;
        LocalDateTime time = LocalDateTime.now();

        //이전에 검색했던 내용이면
        if(data != null) {
            data.setDate(time);
            searchRepository.save(data);
        } else { //처음 검색하는 내용이면
            Search new_data = new Search();
            new_data.setDate(time);
            new_data.setContent(content);
            new_data.setUser(userEntity);

            searchRepository.save(new_data);
        }

        return headlines;
    }
}
