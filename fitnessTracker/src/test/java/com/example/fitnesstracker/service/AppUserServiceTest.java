package com.example.fitnesstracker.service;

import com.example.fitnesstracker.dto.AppUserDto;
import com.example.fitnesstracker.models.user.AppUser;
import com.example.fitnesstracker.models.user.SystemUser;
import com.example.fitnesstracker.repository.AppUserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.context.ContextConfiguration;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ContextConfiguration(classes = {AppUserService.class})
@ExtendWith(MockitoExtension.class)
public class AppUserServiceTest {
    @Mock
    private AppUserRepository userRepository;

    @InjectMocks
    private AppUserService userService;


    @Test
    public void testCreateUser() {
        AppUserDto userDto = new AppUserDto("username", "password", 25, 70.0, 180.0, "Ectomorph", "LoseWeight");
        AppUser user = AppUser.builder().username(userDto.getUsername()).password(userDto.getPassword()).type(SystemUser.UserType.User).build();

        when(userRepository.save(any())).thenReturn(user);

        AppUserDto createdUserDto = userService.createUser(userDto);

        assertEquals(userDto.getUsername(), createdUserDto.getUsername());
        assertEquals(userDto.getPassword(), createdUserDto.getPassword());
        assertEquals(userDto.getAge(), createdUserDto.getAge());
        assertEquals(userDto.getHeight(), createdUserDto.getHeight());
        assertEquals(userDto.getWeight(), createdUserDto.getWeight());
        assertEquals(userDto.getBodyType(), createdUserDto.getBodyType());
        assertEquals(userDto.getObjective(), createdUserDto.getObjective());
        verify(userRepository, times(1)).save(any());
    }

    @Test
    public void testGetUserByUsername() {
        AppUser user = new AppUser();
        user.setUsername("username");
        user.setBodyType(AppUser.BodyType.Ectomorph);
        user.setObjective(AppUser.Objective.LoseWeight);

        when(userRepository.findByUsername("username")).thenReturn(user);

        AppUserDto foundUserDto = userService.getUserByUsername("username");

        assertEquals("username", foundUserDto.getUsername());
        assertEquals("Ectomorph", foundUserDto.getBodyType());
        assertEquals("LoseWeight", foundUserDto.getObjective());
        verify(userRepository, times(1)).findByUsername(any());
    }

    @Test
    public void testUpdateUser() {
        AppUserDto updatedUserDto = new AppUserDto("username", "password", 30, 75.0, 185.0, "Mesomorph", "GainWeight");
        AppUser user = new AppUser();
        user.setUsername("username");

        when(userRepository.findByUsername("username")).thenReturn(user);
        when(userRepository.save(any())).thenReturn(user);

        AppUserDto updatedUser = userService.updateUser(updatedUserDto);

        assertEquals(30, updatedUser.getAge());
        assertEquals(75.0, updatedUser.getWeight());
        assertEquals(185.0, updatedUser.getHeight());
        assertEquals("Mesomorph", updatedUser.getBodyType());
        assertEquals("GainWeight", updatedUser.getObjective());
        verify(userRepository, times(1)).save(user);
    }

    @Test
    public void testDeleteUser() {
        AppUser user = new AppUser();
        user.setUsername("username");

        when(userRepository.findByUsername("username")).thenReturn(user);

        userService.deleteUser("username");

        verify(userRepository, times(1)).delete(user);
    }
}
