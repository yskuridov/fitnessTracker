package com.example.fitnesstracker.service;

import com.example.fitnesstracker.dto.AppAdminDto;
import com.example.fitnesstracker.models.user.AppAdmin;
import com.example.fitnesstracker.models.user.SystemUser;
import com.example.fitnesstracker.repository.AppAdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppAdminService {
    @Autowired
    private AppAdminRepository adminRepository;

    public AppAdminDto createAppAdmin(String username, String password) {
        AppAdmin admin = AppAdmin.builder().username(username).password(password).type(SystemUser.UserType.Admin).build();
        adminRepository.save(admin);
        return new AppAdminDto(admin);
    }


}
