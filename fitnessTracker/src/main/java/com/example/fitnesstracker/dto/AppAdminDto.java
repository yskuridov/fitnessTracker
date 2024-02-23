package com.example.fitnesstracker.dto;

import com.example.fitnesstracker.models.user.AppAdmin;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AppAdminDto {
    private String username;
    private String password;

    public AppAdminDto(AppAdmin admin) {
        AppAdminDto.builder().username(admin.getUsername()).password(admin.getPassword()).build();
    }
}
