package com.project.newstart.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
public class Summary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long summary_id;

    //기사 제목
    @Column(nullable = false)
    private String title;

    //요약 내용
    @Column(columnDefinition="TEXT", nullable = false)
    private String content;

    //원본 기사 링크(네이버 뉴스)
    @Column(nullable = false)
    private String link;

    //디비 저장 시간
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date date;
}
