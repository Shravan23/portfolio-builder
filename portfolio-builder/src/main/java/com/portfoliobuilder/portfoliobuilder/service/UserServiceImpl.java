package com.portfoliobuilder.portfoliobuilder.service;

import com.portfoliobuilder.portfoliobuilder.config.SecurityConfig;
import com.portfoliobuilder.portfoliobuilder.dto.LoginDto;
import com.portfoliobuilder.portfoliobuilder.dto.UserDto;
import com.portfoliobuilder.portfoliobuilder.models.User;
import com.portfoliobuilder.portfoliobuilder.repository.UserRepository;
import com.portfoliobuilder.portfoliobuilder.util.LoginMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements  UserService{

    @Autowired
    UserRepository repository;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Override
    public String addUser(UserDto userDto) {
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
        String msg = "";
        User user = repository.findByEmail(loginDto.getEmail());
        if(user!=null) {
            String password = loginDto.getPassword();
            String encodedPassword = user.getPassword();
            Boolean isVallid = passwordEncoder.matches(password,encodedPassword);
            if(isVallid) {
                Optional<User> validUser = repository.findByEmailAndPassword(loginDto.getEmail(), encodedPassword);
                if(validUser.isPresent()) {
                    return new LoginMessage("Login Success", true);
                } else {
                    return new LoginMessage("Login Failed", false);
                }
            } else {
                return new LoginMessage("Password Wrong", false);
            }
        } else {
            return new LoginMessage("Email doesn't exist", false);
        }
    }
}
