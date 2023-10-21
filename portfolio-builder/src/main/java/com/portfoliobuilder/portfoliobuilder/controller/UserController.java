package com.portfoliobuilder.portfoliobuilder.controller;

import com.portfoliobuilder.portfoliobuilder.dto.LoginDto;
import com.portfoliobuilder.portfoliobuilder.dto.UserDto;
import com.portfoliobuilder.portfoliobuilder.service.UserService;
import com.portfoliobuilder.portfoliobuilder.util.LoginMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("v1/user")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/signup")
    public String signUpUser(@RequestBody UserDto userDto) {
        String id = service.addUser(userDto);
        return id;
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDto loginDto) {
        LoginMessage login = service.loginUser(loginDto);
        return ResponseEntity.ok(login);

    }
}
