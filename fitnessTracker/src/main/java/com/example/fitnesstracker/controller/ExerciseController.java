package com.example.fitnesstracker.controller;

import com.example.fitnesstracker.dto.DailyExerciseDto;
import com.example.fitnesstracker.dto.ExerciseDto;
import com.example.fitnesstracker.service.ExerciseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class ExerciseController {
    private final ExerciseService exerciseService;

    @PostMapping("/exercise")
    public ResponseEntity<ExerciseDto> createExercise(@RequestBody ExerciseDto dto){
        return ResponseEntity.ok(exerciseService.createExercise(dto));
    }



    @PostMapping("/dailyExercise")
    public ResponseEntity<DailyExerciseDto> createDailyExercise(@RequestBody DailyExerciseDto dto) {
        return ResponseEntity.ok(exerciseService.createDailyExercise(dto));
    }

    @GetMapping("/dailyExercise/{username}")
    public ResponseEntity<List<DailyExerciseDto>> getDailyExercises(@PathVariable String username){
        return ResponseEntity.ok(exerciseService.getExercisesByUsername(username));
    }
}
