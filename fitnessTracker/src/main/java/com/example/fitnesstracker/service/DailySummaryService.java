package com.example.fitnesstracker.service;

import com.example.fitnesstracker.dto.DailySummaryDto;
import com.example.fitnesstracker.models.DailySummary;
import com.example.fitnesstracker.repository.AppUserRepository;
import com.example.fitnesstracker.repository.DailySummaryRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

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
        summary.setDate(LocalDate.parse(dto.getDate()));
        summary.setId(1L);
        summary.setExercises(new ArrayList<>());
        summary.setMeals(new ArrayList<>());

        dailySummaryRepository.save(summary);

        return new DailySummaryDto(summary);
    }

    public List<DailySummaryDto> getSummaries(String username){
        List<DailySummary> summaries = dailySummaryRepository.findAllByUser_Username(username);
        List<DailySummaryDto> dtos = new ArrayList<>();
        for(DailySummary d : summaries) dtos.add(new DailySummaryDto(d));
        return dtos;
    }
}
