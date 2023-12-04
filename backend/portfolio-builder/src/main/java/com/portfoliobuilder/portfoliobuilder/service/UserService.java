package com.portfoliobuilder.portfoliobuilder.service;

import com.portfoliobuilder.portfoliobuilder.dto.LoginDto;
import com.portfoliobuilder.portfoliobuilder.dto.UserDto;
import com.portfoliobuilder.portfoliobuilder.models.User;
import com.portfoliobuilder.portfoliobuilder.models.UserData;
import com.portfoliobuilder.portfoliobuilder.util.LoginMessage;


public interface UserService {

    String addUser(UserDto userDto);
    LoginMessage loginUser(LoginDto loginDto);

    User findByEmail(String email);

    void updateUserFirstLoginStatus(User user);
    UserData getUserData(User user);
    UserData saveUserData(User user, String jsonData);

    void logout(String token);

}
