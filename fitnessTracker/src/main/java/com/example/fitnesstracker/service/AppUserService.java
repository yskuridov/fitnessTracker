package com.example.fitnesstracker.service;

import com.example.fitnesstracker.dto.AppUserDto;
import com.example.fitnesstracker.models.user.AppUser;
import com.example.fitnesstracker.models.user.SystemUser;
import com.example.fitnesstracker.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppUserService {
    @Autowired
    private AppUserRepository userRepository;

    public AppUserDto createUser(AppUserDto userDto){
        AppUser user = AppUser.builder().username(userDto.getUsername())
                .password(userDto.getPassword())
                .type(SystemUser.UserType.User)
                .bodyType(AppUser.BodyType.valueOf(userDto.getBodyType()))
                .age(userDto.getAge())
                .height(userDto.getHeight())
                .weight(userDto.getWeight())
                .objective(AppUser.Objective.valueOf(userDto.getObjective()))
                .build();

        userRepository.save(user);
        return new AppUserDto(user);
    }

    public AppUserDto getUserByUsername(String username) {
        AppUser user = userRepository.findByUsername(username);
        return new AppUserDto(user);
    }

    public AppUserDto updateUser(AppUserDto updatedUser){
        AppUser user = userRepository.findByUsername(updatedUser.getUsername());
        user.setAge(updatedUser.getAge());
        user.setWeight(updatedUser.getWeight());
        user.setHeight(updatedUser.getHeight());
        user.setBodyType(AppUser.BodyType.valueOf(updatedUser.getBodyType()));
        user.setObjective(AppUser.Objective.valueOf(updatedUser.getObjective()));
        userRepository.save(user);
        return new AppUserDto(user);
    }

    public void deleteUser(String username){
        AppUser user = userRepository.findByUsername(username);
        userRepository.delete(user);
    }

}
