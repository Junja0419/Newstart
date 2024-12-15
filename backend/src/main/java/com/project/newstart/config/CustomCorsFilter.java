package com.project.newstart.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CustomCorsFilter extends CorsFilter {

    public CustomCorsFilter() {
        super(corsConfigurationSource());
    }

    private static UrlBasedCorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true); // 쿠키 허용
        config.setAllowedOrigins(List.of("https://siyeon-3faf5.web.app")); // React 프론트엔드 URL
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS")); // HTTP 메서드
        config.setAllowedHeaders(List.of("*")); // 모든 요청 헤더 허용
        config.setExposedHeaders(List.of("Authorization", "Content-Type")); // 필요한 응답 헤더

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }
}
