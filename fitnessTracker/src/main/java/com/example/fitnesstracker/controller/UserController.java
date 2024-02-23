package com.example.fitnesstracker.controller;

import com.example.fitnesstracker.dto.AppAdminDto;
import com.example.fitnesstracker.dto.AppUserDto;
import com.example.fitnesstracker.service.AppAdminService;
import com.example.fitnesstracker.service.AppUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class UserController {
    private final AppUserService userService;
    private final AppAdminService adminService;

    @PostMapping("/user")
    public ResponseEntity<AppUserDto> createUser(AppUserDto user) {
        return ResponseEntity.ok(userService.createUser(user));
    }

    @GetMapping("/user/{username}")
    public ResponseEntity<AppUserDto> getUserByUsername(@PathVariable String username) {
        return ResponseEntity.ok(userService.getUserByUsername(username));
    }

    @PutMapping("/user")
    public ResponseEntity<AppUserDto> updateUser(AppUserDto updatedUser) {
        return ResponseEntity.ok(userService.updateUser(updatedUser));
    }

    @DeleteMapping("/user/{username}")
    public void deleteUser(String username) {
        userService.deleteUser(username);
    }

    @PostMapping("/admin")
    public ResponseEntity<AppAdminDto> createAdmin(AppAdminDto admin) {
        return ResponseEntity.ok(adminService.createAdmin(admin));
    }


}
