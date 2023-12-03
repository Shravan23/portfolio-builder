package com.portfoliobuilder.portfoliobuilder.service;

import com.portfoliobuilder.portfoliobuilder.dto.LoginDto;
import com.portfoliobuilder.portfoliobuilder.dto.UserDto;
import com.portfoliobuilder.portfoliobuilder.models.User;
import com.portfoliobuilder.portfoliobuilder.models.UserData;
import com.portfoliobuilder.portfoliobuilder.repository.UserDataRepository;
import com.portfoliobuilder.portfoliobuilder.repository.UserRepository;
import com.portfoliobuilder.portfoliobuilder.security.JwtTokenProvider;
import com.portfoliobuilder.portfoliobuilder.util.LoginMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements  UserService{

    @Autowired
    UserRepository repository;

    @Autowired
    UserDataRepository userDataRepository;
    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;
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
                passwordEncoder.encode(userDto.getPassword()),
                true
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
                return new LoginMessage("Login Success", true, user.getFirstName()+" "+user.getLastName());
            } else {
                return new LoginMessage("Password Wrong", false, null);
            }
        } else {
            return new LoginMessage("Email doesn't exist", false, null);
        }
    }

    @Override
    public User findByEmail(String email) {
        return repository.findByEmail(email);
    }

    @Override
    public void updateUserFirstLoginStatus(User user) {
        user.setFirstLogin(false);
        repository.save(user);
    }

    @Override
    public UserData getUserData(User user) {
        Long id = user.getId();
        UserData data = userDataRepository.findUserDataByUserDataId(id);
        return userDataRepository.findUserDataByUserDataId(id);
    }

    @Override
    public UserData saveUserData(User user, String jsonData) {
        UserData userData = getUserData(user);
        if(userData == null) {
            userData = new UserData();
            userData.setUserDataId(user.getId());
        }
        userData.setUserData(jsonData);
        return userDataRepository.save(userData);
    }

    public void logout(String token) {
        jwtTokenProvider.blacklistToken(token);
    }

}
