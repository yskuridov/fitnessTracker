package com.example.fitnesstracker.dto;

import com.example.fitnesstracker.models.user.AppAdmin;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppAdminDto {
    private String username;
    private String password;

    public AppAdminDto(AppAdmin admin) {
        this.username = admin.getUsername();
        this.password = admin.getPassword();
    }
}
