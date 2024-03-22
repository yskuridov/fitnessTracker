package com.example.fitnesstracker.dto;


import com.example.fitnesstracker.models.user.AppUser;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class AppUserDto {
    private String username;
    private String password;
    private int age;
    private double weight;
    private double height;
    private String gender;
    private String bodyType;
    private String objective;

    public AppUserDto(AppUser user) {
        this.username = user.getUsername();
        this.password = user.getPassword();
        this.age = user.getAge();
        this.weight = user.getWeight();
        this.height = user.getHeight();
        this.gender = user.getGender().toString();
        this.bodyType = user.getBodyType().toString();
        this.objective = user.getObjective().toString();
    }
}
