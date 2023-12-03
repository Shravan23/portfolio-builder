package com.portfoliobuilder.portfoliobuilder.controller;

import com.portfoliobuilder.portfoliobuilder.dto.LoginDto;
import com.portfoliobuilder.portfoliobuilder.dto.UserDto;
import com.portfoliobuilder.portfoliobuilder.models.User;
import com.portfoliobuilder.portfoliobuilder.models.UserData;
import com.portfoliobuilder.portfoliobuilder.security.JwtTokenProvider;
import com.portfoliobuilder.portfoliobuilder.service.UserService;
import com.portfoliobuilder.portfoliobuilder.util.LoginMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("v1/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService service;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @PostMapping("/signup")
    public ResponseEntity<?> signUpUser(@RequestBody UserDto userDto) {
        String id = service.addUser(userDto);
        return ResponseEntity.ok(id);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDto loginDto) {
        LoginMessage login = service.loginUser(loginDto);
        if(login.getStatus()) {
            String token = jwtTokenProvider.createToken(loginDto.getEmail());
            User user = service.findByEmail(loginDto.getEmail());
            boolean isFirstLogin = user.isFirstLogin();
            service.updateUserFirstLoginStatus(user);
            UserData userData = service.getUserData(user);
            String jsonData = isFirstLogin ? "{}" : (userData != null ? userData.getUserData() : "{}");
            Map<String, Object> response= new HashMap<>();
            response.put("isFirstLogin", isFirstLogin);
            response.put("userData", jsonData);
            response.put("token", token);
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.ok(login);

    }

    @PostMapping("/json")
    public ResponseEntity<?> updateJsonData(@RequestBody String jsonData, @RequestHeader("Authorization") String authToken) {
        String userEmail = jwtTokenProvider.getUsernameFromToken(authToken.substring(7)); // Assuming the token is in the format 'Bearer <token>'
        User user = service.findByEmail(userEmail);

        if (user != null && jwtTokenProvider.validateToken(authToken.substring(7))) {
            service.saveUserData(user, jsonData);
            return ResponseEntity.ok("JSON data updated successfully.");
        }

        return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Invalid token or user not found.");
    }
}
