package com.example.fitnesstracker.service;

import com.example.fitnesstracker.dto.exercise.DailyExerciseDto;
import com.example.fitnesstracker.dto.exercise.ExerciseDto;
import com.example.fitnesstracker.dto.nutrition.DailyMealDto;
import com.example.fitnesstracker.dto.nutrition.MealDto;
import com.example.fitnesstracker.models.DailySummary;
import com.example.fitnesstracker.models.exercise.DailyExercise;
import com.example.fitnesstracker.models.exercise.Exercise;
import com.example.fitnesstracker.models.nutrition.DailyMeal;
import com.example.fitnesstracker.models.nutrition.Meal;
import com.example.fitnesstracker.repository.DailyMealRepository;
import com.example.fitnesstracker.repository.DailySummaryRepository;
import com.example.fitnesstracker.repository.MealRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MealService {
    @Autowired
    private MealRepository mealRepository;
    @Autowired
    private DailySummaryRepository dailySummaryRepository;
    @Autowired
    private DailyMealRepository dailyMealRepository;
    @Autowired
    private DailySummaryService dailySummaryService;

    @Transactional
    public DailyMealDto createDailyMeal(DailyMealDto dto) {
        createIfInexistent(dto);
        DailySummary dailySummary = dailySummaryRepository.findByUser_UsernameAndDate(dto.getDailySummaryDto().getUsername(), LocalDate.parse(dto.getDailySummaryDto().getDate()));
        Meal meal = mealRepository.findByName(dto.getMealDto().getName());
        DailyMeal dailyMeal = DailyMeal.builder().dailySummary(dailySummary).meal(meal).build();
        dailySummary.getMeals().add(dailyMeal);
        dailyMealRepository.save(dailyMeal);
        dailySummaryRepository.save(dailySummary);
        return new DailyMealDto(dailyMeal);
    }

    private void createIfInexistent(DailyMealDto dto){
        DailySummary summary = dailySummaryRepository.findByUser_UsernameAndDate(dto.getDailySummaryDto().getUsername(), LocalDate.parse(dto.getDailySummaryDto().getDate()));
        Meal meal = mealRepository.findByName(dto.getMealDto().getName());
        if(meal == null) createMeal(dto.getMealDto());
        if(summary == null) dailySummaryService.createDailySummary(dto.getDailySummaryDto());
    }

    @Transactional
    public MealDto createMeal(MealDto dto){
        if(mealRepository.existsByName(dto.getName())) return new MealDto(mealRepository.findByName(dto.getName()));
        Meal meal = Meal.builder().name(dto.getName()).ingredients(dto.getIngredients()).image(dto.getImage()).servingPortion(dto.getServingPortion()).calories(dto.getCalories()).protein(dto.getProtein()).carbs(dto.getCarbs()).fat(dto.getFat()).fiber(dto.getFiber()).calcium(dto.getCalcium()).sodium(dto.getSodium()).cholesterol(dto.getCholesterol()).build();
        return new MealDto(mealRepository.save(meal));
    }

    public List<DailyMealDto> getDailyExercisesByUsernameAndDate(String username, String date){
        List<DailyMeal> dailyMeals = dailyMealRepository.findAllByDailySummary_User_UsernameAndDailySummary_Date(username, LocalDate.parse(date));
        List<DailyMealDto> dtos = new ArrayList<>();
        for(DailyMeal d : dailyMeals) dtos.add(new DailyMealDto(d));
        return dtos;
    }
}
