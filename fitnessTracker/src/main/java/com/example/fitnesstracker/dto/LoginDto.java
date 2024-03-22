package com.example.fitnesstracker.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class LoginDto {
    private String username;
    private String password;
}
