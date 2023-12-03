package com.portfoliobuilder.portfoliobuilder.util;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginMessage {
    String message;
    Boolean status;

    String name;
}
