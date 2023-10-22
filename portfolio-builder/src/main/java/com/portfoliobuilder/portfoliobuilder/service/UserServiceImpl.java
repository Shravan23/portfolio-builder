package com.portfoliobuilder.portfoliobuilder.service;

import com.portfoliobuilder.portfoliobuilder.dto.LoginDto;
import com.portfoliobuilder.portfoliobuilder.dto.UserDto;
import com.portfoliobuilder.portfoliobuilder.models.User;
import com.portfoliobuilder.portfoliobuilder.repository.UserRepository;
import com.portfoliobuilder.portfoliobuilder.util.LoginMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserServiceImpl implements  UserService{

    @Autowired
    UserRepository repository;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Override
    public String addUser(UserDto userDto) {
        if (repository.findByEmail(userDto.getEmail()) != null) {
            return "Email already exists";
        }
        User user = new User(
                userDto.getId(),
                userDto.getFirstName(),
                userDto.getLastName(),
                userDto.getEmail(),
                passwordEncoder.encode(userDto.getPassword())
        );
        repository.save(user);
        return ("Signup Successful for the user");
    }

    @Override
    public LoginMessage loginUser(LoginDto loginDto) {
        User user = repository.findByEmail(loginDto.getEmail());
        if (user != null) {
            boolean isValid = passwordEncoder.matches(loginDto.getPassword(), user.getPassword());
            if (isValid) {
                return new LoginMessage("Login Success", true);
            } else {
                return new LoginMessage("Password Wrong", false);
            }
        } else {
            return new LoginMessage("Email doesn't exist", false);
        }
    }


}
