package com.project.newstart.config;

import com.project.newstart.service.CustomOAuth2UserService;
import com.project.newstart.service.CustomUserDetailsService;
import jakarta.servlet.DispatcherType;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.http.HttpMethod;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final CustomOAuth2UserService customOAuth2UserService;
    private final CustomUserDetailsService customUserDetailsService;

    public SecurityConfig(CustomOAuth2UserService customOAuth2UserService, CustomUserDetailsService customUserDetailsService) {
        this.customOAuth2UserService = customOAuth2UserService;
        this.customUserDetailsService = customUserDetailsService;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web
                .ignoring()
                .requestMatchers(PathRequest.toStaticResources().atCommonLocations());
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();

        config.setAllowCredentials(true);
        config.setAllowedOriginPatterns(List.of(
                "https://siyeon-3faf5.web.app"
        ));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"));
        config.setAllowedHeaders(List.of("*")); // 모든 헤더 허용
        config.setExposedHeaders(List.of("Authorization", "Content-Type")); // 필요한 응답 헤더 허용

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config); // 모든 경로에 대해 CORS 설정 적용
        return source;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        // CSRF 비활성화
        http.csrf(csrf -> csrf.disable());

        // HTTP Basic 인증 비활성화
        http.httpBasic(httpBasic -> httpBasic.disable());

        // CORS 설정
        http.cors(cors -> cors.configurationSource(corsConfigurationSource()));

        // 권한 설정
        http.authorizeHttpRequests(auth -> auth
                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll() // OPTIONS 메서드 허용
                .dispatcherTypeMatchers(DispatcherType.FORWARD).permitAll()
                .requestMatchers("/login/**", "/oauth2/**", "/auth/**").permitAll() // 특정 경로 허용
                .requestMatchers("/css/**", "/images/**", "/js/**", "/login/**", "/logout/**", "/posts/**", "/comments/**", "/error").permitAll()
                .anyRequest().authenticated()); // 그 외 요청은 인증 필요

        // OAuth2.0 로그인 설정
        http.oauth2Login(oauth2 -> oauth2
                .loginPage("https://siyeon-3faf5.web.app/login")
                .defaultSuccessUrl("https://siyeon-3faf5.web.app/") // 로그인 성공 시 리다이렉트 URL
                .userInfoEndpoint(userInfo -> userInfo
                        .userService(customOAuth2UserService)));

        // Form 로그인 설정
        http.formLogin(form -> form
                .loginPage("https://siyeon-3faf5.web.app/auth/email/login")
                .loginProcessingUrl("/auth/email/loginProcess")
                .successHandler((request, response, authentication) -> {
                    // 성공 시 CORS 헤더 추가
                    response.setHeader("Access-Control-Allow-Origin", "https://siyeon-3faf5.web.app");
                    response.setHeader("Access-Control-Allow-Credentials", "true");
                    response.sendRedirect("https://siyeon-3faf5.web.app/");
                })
                .failureHandler((request, response, exception) -> {
                    // 실패 시 CORS 헤더 추가
                    response.setHeader("Access-Control-Allow-Origin", "https://siyeon-3faf5.web.app");
                    response.setHeader("Access-Control-Allow-Credentials", "true");
                    response.sendRedirect("https://siyeon-3faf5.web.app/auth/email/login?error");
                })
                .permitAll());

        // 로그아웃 설정
        http.logout(logout -> logout
                .logoutUrl("/logout")
                .logoutSuccessUrl("https://siyeon-3faf5.web.app/")
                .deleteCookies("JSESSIONID", "remember-me")
                .permitAll());

        // 세션 관리 설정
        http.sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
                .sessionFixation(sessionFixation -> sessionFixation.newSession())
                .maximumSessions(1)
                .maxSessionsPreventsLogin(true));

        return http.build();
    }
}