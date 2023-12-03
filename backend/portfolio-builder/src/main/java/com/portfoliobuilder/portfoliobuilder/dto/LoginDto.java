package com.portfoliobuilder.portfoliobuilder.dto;

import lombok.*;

@Data
@Getter
@Setter
public class LoginDto {
    private String email;
    private String password;
}
