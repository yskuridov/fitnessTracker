package com.example.fitnesstracker.dto;


import com.example.fitnesstracker.models.user.AppUser;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AppUserDto {
    private String username;
    private String password;
    private int age;
    private double weight;
    private double height;
    private String bodyType;
    private String objective;

    public AppUserDto(AppUser user) {
        AppUserDto.builder().username(user.getUsername()).password(user.getPassword()).age(user.getAge()).weight(user.getWeight()).height(user.getHeight()).bodyType(user.getBodyType().toString()).objective(user.getObjective().toString()).build();
    }
}
