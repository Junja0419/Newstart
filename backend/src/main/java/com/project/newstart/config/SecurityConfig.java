package com.project.newstart.config;

import com.project.newstart.service.CustomOAuth2UserService;
import com.project.newstart.service.CustomUserDetailsService;
import jakarta.servlet.DispatcherType;
import jakarta.servlet.http.HttpServletRequest;
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
                "https://siyeon-3faf5.web.app",
                "https://newstart-project-444411.du.r.appspot.com"
        )); // React 배포 URL 허용
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS")); // 모든 HTTP 메서드 허용
        config.setAllowedHeaders(List.of("Authorization", "Content-Type", "Accept", "X-Requested-With", "Origin")); // 모든 헤더 허용
        config.setExposedHeaders(List.of("Authorization", "Content-Type")); // 모든 응답 헤더 허용

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config); // 모든 경로에 대해 CORS 설정 적용
        return source;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        //csrf disable
        http
                .csrf((auth) -> auth
                        .disable());

        //http basic 인증 방식 disable
        http
                .httpBasic((auth) -> auth.disable());

        //cors
        http.cors(cors -> cors.configurationSource(corsConfigurationSource()));

        //a
        http
                .authorizeHttpRequests((auth) -> auth
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll() // OPTIONS 메서드 허용
                        .dispatcherTypeMatchers(DispatcherType.FORWARD).permitAll()
                        .requestMatchers("/login/**", "/oauth2/**", "/auth/**").permitAll() //login, /, join 경로 요청이 오면 모든 권한 허용
                        .requestMatchers("/css/**", "images/**", "/js/**", "/login/**", "/logout/**", "/posts/**", "/comments/**", "/error").permitAll()
                        .anyRequest().authenticated()); //위 경로 외의 요청이 오면 로그인 후 이용 가능

        //OAuth2.0
        http
                .oauth2Login((oauth2) -> oauth2
                        .loginPage("https://siyeon-3faf5.web.app/login")
                        .defaultSuccessUrl("https://siyeon-3faf5.web.app/") //로그인 성공 후 / 리다이렉트
                        .userInfoEndpoint((userInfoEndpointConfig) -> userInfoEndpointConfig
                                .userService(customOAuth2UserService)));

        //form 로그인 방식
        http
                .formLogin((auth) -> auth
                        .loginPage("https://siyeon-3faf5.web.app/auth/email/login")
                        .loginProcessingUrl("/auth/email/loginProcess")
                        .successHandler((request, response, authentication) -> {
                            response.setHeader("Access-Control-Allow-Origin", "https://siyeon-3faf5.web.app");
                            response.setHeader("Access-Control-Allow-Credentials", "true");
                            response.sendRedirect("https://siyeon-3faf5.web.app/"); // 성공 시 React 앱으로 리디렉션
                        })
                        .failureHandler((request, response, exception) -> {
                            response.setHeader("Access-Control-Allow-Origin", "https://siyeon-3faf5.web.app");
                            response.setHeader("Access-Control-Allow-Credentials", "true");
                            response.sendRedirect("https://siyeon-3faf5.web.app/auth/email/login?error"); // 실패 시 React 로그인 페이지로 리디렉션
                        })
                        .permitAll());

        //logout
        http.logout(customizer -> customizer
                .logoutUrl("/logout")
                .logoutSuccessUrl("https://siyeon-3faf5.web.app/")
                .deleteCookies("JSESSIONID", "remember-me")
                .permitAll());

        //세션 설정
        http
                .sessionManagement((session) -> session
                        .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED).sessionFixation((sessionFixation) -> sessionFixation.newSession())
                        .maximumSessions(1)
                        .maxSessionsPreventsLogin(true));

        return http.build();
    }
}
