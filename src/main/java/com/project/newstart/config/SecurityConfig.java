package com.project.newstart.config;

import com.project.newstart.service.CustomOAuth2UserService;
import jakarta.servlet.DispatcherType;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final CustomOAuth2UserService customOAuth2UserService;

    public SecurityConfig(CustomOAuth2UserService customOAuth2UserService) {
        this.customOAuth2UserService = customOAuth2UserService;
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
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        
        //csrf disable
        http
                .csrf((auth) -> auth
                        .disable());
        
        //http basic 인증 방식 disable
        http
                .httpBasic((auth) -> auth.disable());

        //a
        http
                .authorizeHttpRequests((auth) -> auth
                        .dispatcherTypeMatchers(DispatcherType.FORWARD).permitAll()
                        .requestMatchers("/login/**", "/oauth2/**", "/auth/**").permitAll() //login, /, join 경로 요청이 오면 모든 권한 허용
                        .requestMatchers("/css/**", "images/**", "/js/**", "/login/*", "/logout/*", "/posts/**", "/comments/**", "/error").permitAll()
                        .anyRequest().authenticated()); //위 경로 외의 요청이 오면 로그인 후 이용 가능

        //OAuth2.0
        http
                .oauth2Login((oauth2) -> oauth2
                        .loginPage("/login")
                        .userInfoEndpoint((userInfoEndpointConfig) -> userInfoEndpointConfig
                                .userService(customOAuth2UserService)));

        //form 로그인 방식
        http
                .formLogin((auth) -> auth
                        .loginPage("/auth/email/login")
                        .loginProcessingUrl("/auth/email/loginProcess")
                        .defaultSuccessUrl("/")
                        .permitAll());

        //logout
        http.logout(customizer -> customizer
                        .logoutUrl("/logout")
                        .logoutSuccessUrl("/")
                        .deleteCookies("JSESSIONID", "remember-me")
                .permitAll());

        //세션 설정
        http
                .sessionManagement((session) -> session
                        .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED).sessionFixation((sessionFixation)->sessionFixation.newSession())
                        .maximumSessions(1)
                        .maxSessionsPreventsLogin(true));
        
        return http.build();
    }
}
