package com.example.fitnesstracker.controller;

import com.example.fitnesstracker.dto.AppUserDto;
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

    @PostMapping("/user")
    public ResponseEntity<AppUserDto> createUser(@RequestBody AppUserDto user) {
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

    @PostMapping("/login")
    public ResponseEntity<AppUserDto> login(@PathVariable  String username, @PathVariable String password){
        try{
            return ResponseEntity.ok(userService.login(username, password));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }


}
