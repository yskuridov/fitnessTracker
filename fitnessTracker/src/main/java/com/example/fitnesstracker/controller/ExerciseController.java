package com.example.fitnesstracker.controller;

import com.example.fitnesstracker.dto.exercise.DailyExerciseDto;
import com.example.fitnesstracker.dto.exercise.ExerciseDto;
import com.example.fitnesstracker.service.ExerciseService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
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

    @GetMapping(value = "/dailyExercise/{username}", params = "date")
    public ResponseEntity<List<DailyExerciseDto>> getDailyExercises(@PathVariable String username, @RequestParam("date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) String date){
        return ResponseEntity.ok(exerciseService.getDailyExercisesByUsernameAndDate(username, date));
    }

    @DeleteMapping("/dailyExercise")
    public void deleteDailyExercise(@RequestBody DailyExerciseDto dto) {
        exerciseService.deleteDailyExercise(dto);
    }
}
