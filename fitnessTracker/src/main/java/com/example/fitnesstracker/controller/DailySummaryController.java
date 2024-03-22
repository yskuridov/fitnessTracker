package com.example.fitnesstracker.controller;


import com.example.fitnesstracker.dto.DailySummaryDto;
import com.example.fitnesstracker.service.DailySummaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class DailySummaryController {

    private final DailySummaryService dailySummaryService;

    @GetMapping("/dailySummary/{username}")
    public ResponseEntity<List<DailySummaryDto>> getDailyExercises(@PathVariable String username){
        return ResponseEntity.ok(dailySummaryService.getSummaries(username));
    }


}
