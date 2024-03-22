package com.example.fitnesstracker.service;

import com.example.fitnesstracker.dto.DailySummaryDto;
import com.example.fitnesstracker.models.DailySummary;
import com.example.fitnesstracker.repository.AppUserRepository;
import com.example.fitnesstracker.repository.DailySummaryRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class DailySummaryService {
    @Autowired
    private DailySummaryRepository dailySummaryRepository;
    @Autowired
    private AppUserRepository appUserRepository;

    @Transactional
    public DailySummaryDto createDailySummary(DailySummaryDto dto){
        DailySummary summary = new DailySummary();
        summary.setWaterIntake(0.0);
        summary.setUser(appUserRepository.findByUsername(dto.getUsername()));
        summary.setDate(LocalDateTime.parse(dto.getDate()));
        summary.setId(1L);

        dailySummaryRepository.save(summary);

        return new DailySummaryDto(summary);
    }
}
