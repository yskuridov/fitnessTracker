package com.example.fitnesstracker.controller;

import com.example.fitnesstracker.dto.AppAdminDto;
import com.example.fitnesstracker.dto.AppUserDto;
import com.example.fitnesstracker.service.AppAdminService;
import com.example.fitnesstracker.service.AppUserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc(addFilters = false)
@WebMvcTest(UserController.class)
public class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private AppUserService userService;
    @MockBean
    private AppAdminService adminService;


    @Test
    public void testCreateUser() throws Exception {
        ObjectMapper mapper = new ObjectMapper();

        AppUserDto userDto = new AppUserDto();
        userDto.setUsername("username");
        userDto.setPassword("password");
        userDto.setAge(25);
        userDto.setWeight(80);
        userDto.setHeight(180);
        userDto.setBodyType("Ectomorph");
        userDto.setObjective("LoseWeight");

        String jsonContent = mapper.writeValueAsString(userDto);

        when(userService.createUser(userDto)).thenReturn(userDto);

        mockMvc.perform(post("/user")
                .contentType("application/json")
                .content(jsonContent))
                .andExpect(status().isOk());
    }

    @Test
    public void testGetUserByUsername() throws Exception {
        String username = "username";

        AppUserDto userDto = new AppUserDto();
        userDto.setUsername(username);
        userDto.setPassword("password");


        when(userService.getUserByUsername(username)).thenReturn(userDto);

        mockMvc.perform(get("/user/{username}", username))
                .andExpect(status().isOk());
    }

    @Test
    public void testUpdateUser() throws Exception {
        ObjectMapper mapper = new ObjectMapper();

        AppUserDto userDto = new AppUserDto();
        userDto.setUsername("username");
        userDto.setPassword("newPassword");

        String jsonContent = mapper.writeValueAsString(userDto);

        when(userService.updateUser(userDto)).thenReturn(userDto);

        mockMvc.perform(put("/user")
                .contentType("application/json")
                .content(jsonContent))
                .andExpect(status().isOk());
    }

    @Test
    public void testDeleteUser() throws Exception {
        String username = "usernameToDelete";

        doNothing().when(userService).deleteUser(username);

        mockMvc.perform(delete("/user/{username}", username))
                .andExpect(status().isOk());
    }

    @Test
    public void testCreateAdmin() throws Exception {
        ObjectMapper mapper = new ObjectMapper();

        AppAdminDto adminDto = new AppAdminDto();
        adminDto.setUsername("admin");
        adminDto.setPassword("password");

        String jsonContent = mapper.writeValueAsString(adminDto);

        when(adminService.createAdmin(adminDto)).thenReturn(adminDto);

        mockMvc.perform(post("/admin")
                .contentType("application/json")
                .content(jsonContent))
                .andExpect(status().isOk());
    }

}
