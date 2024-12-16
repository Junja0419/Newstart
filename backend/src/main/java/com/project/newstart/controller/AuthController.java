package com.project.newstart.controller;

import com.project.newstart.dto.JoinDTO;
import com.project.newstart.dto.PasswordDTO;
import com.project.newstart.dto.ProfileDTO;
import com.project.newstart.entity.UserEntity;
import com.project.newstart.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;
    
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/join")
    public ModelAndView joinProcess(@RequestBody JoinDTO joinDTO) {

        authService.joinProcess(joinDTO);

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("redirect:https://newstart-project-444411.web.app/auth/email/login");
        return modelAndView;
    }

    @PostMapping("/password")
    public ResponseEntity<UserEntity> password(@RequestBody PasswordDTO passwordDTO) {
        UserEntity userEntity = authService.passwordProcess(passwordDTO);

        return ResponseEntity.ok().body(userEntity);
    }

    @PostMapping("/user_delete")
    public String user_delete(@RequestBody ProfileDTO profileDTO) {
        authService.deleteProcess(profileDTO);

        return "ok";
    }
}
