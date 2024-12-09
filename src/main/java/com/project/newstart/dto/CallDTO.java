package com.project.newstart.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
public class CallDTO {
    private String message;
    private Map<String, Object> result;
}
