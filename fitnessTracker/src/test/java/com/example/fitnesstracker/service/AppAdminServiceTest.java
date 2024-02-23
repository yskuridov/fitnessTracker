package com.example.fitnesstracker.service;

import com.example.fitnesstracker.dto.AppAdminDto;
import com.example.fitnesstracker.models.user.AppAdmin;
import com.example.fitnesstracker.repository.AppAdminRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ContextConfiguration;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ContextConfiguration(classes = {AppAdminService.class})
@ExtendWith(MockitoExtension.class)
public class AppAdminServiceTest {
    @Mock
    private AppAdminRepository appAdminRepository;
    @InjectMocks
    private AppAdminService appAdminService;

    @Test
    void testCreateAdmin(){
        AppAdminDto adminDto = new AppAdminDto("username", "password");
        AppAdmin admin = AppAdmin.builder().username(adminDto.getUsername()).password(adminDto.getPassword()).build();

        when(appAdminRepository.save(any())).thenReturn(admin);

        AppAdminDto createdAdminDto = appAdminService.createAdmin(adminDto);

        assertEquals(adminDto.getUsername(), createdAdminDto.getUsername());
        assertEquals(adminDto.getPassword(), createdAdminDto.getPassword());
        verify(appAdminRepository, times(1)).save(any());
    }
}
