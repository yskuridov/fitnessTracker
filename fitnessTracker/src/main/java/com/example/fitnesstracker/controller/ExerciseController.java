package com.example.fitnesstracker.controller;

import com.example.fitnesstracker.dto.DailyExerciseDto;
import com.example.fitnesstracker.dto.ExerciseDto;
import com.example.fitnesstracker.service.ExerciseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class ExerciseController {
    private final ExerciseService exerciseService;

    @PostMapping("/exercise")
    public ResponseEntity<ExerciseDto> createExercise(ExerciseDto dto){
        return ResponseEntity.ok(exerciseService.createExercise(dto));
    }

    @PostMapping("/dailyExercise")
    public ResponseEntity<DailyExerciseDto> createDailyExercise(DailyExerciseDto dto) throws Exception {
        return ResponseEntity.ok(exerciseService.createDailyExercise(dto));
    }
}
