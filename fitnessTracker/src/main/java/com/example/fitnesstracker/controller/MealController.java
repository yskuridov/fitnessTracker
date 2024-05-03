package com.example.fitnesstracker.controller;


import com.example.fitnesstracker.dto.exercise.DailyExerciseDto;
import com.example.fitnesstracker.dto.nutrition.DailyMealDto;
import com.example.fitnesstracker.dto.nutrition.MealDto;
import com.example.fitnesstracker.service.MealService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class MealController {
    private final MealService mealService;

    @PostMapping("/meals")
    public ResponseEntity<MealDto> createExercise(@RequestBody MealDto dto){
        return ResponseEntity.ok(mealService.createMeal(dto));
    }

    @PostMapping("/dailyMeal")
    public ResponseEntity<DailyMealDto> createDailyExercise(@RequestBody DailyMealDto dto) {
        return ResponseEntity.ok(mealService.createDailyMeal(dto));
    }

    @GetMapping(value = "/dailyMeal/{username}", params = "date")
    public ResponseEntity<List<DailyMealDto>> getDailyExercises(@PathVariable String username, @RequestParam("date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) String date){
        return ResponseEntity.ok(mealService.getDailyMealsByUsernameAndDate(username, date));
    }

    @DeleteMapping("/dailyMeal")
    public void deleteDailyExercise(@RequestBody DailyMealDto dto) {
        mealService.deleteDailyMeal(dto);
    }
}
