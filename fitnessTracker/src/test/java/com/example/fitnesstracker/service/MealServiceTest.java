package com.example.fitnesstracker.service;


import com.example.fitnesstracker.dto.exercise.ExerciseDto;
import com.example.fitnesstracker.dto.nutrition.DailyMealDto;
import com.example.fitnesstracker.dto.nutrition.MealDto;
import com.example.fitnesstracker.models.DailySummary;
import com.example.fitnesstracker.models.exercise.Exercise;
import com.example.fitnesstracker.models.nutrition.DailyMeal;
import com.example.fitnesstracker.models.nutrition.Meal;
import com.example.fitnesstracker.models.user.AppUser;
import com.example.fitnesstracker.repository.DailyMealRepository;
import com.example.fitnesstracker.repository.DailySummaryRepository;
import com.example.fitnesstracker.repository.MealRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.context.ContextConfiguration;

import java.time.LocalDate;
import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ContextConfiguration(classes = {MealService.class})
@ExtendWith(MockitoExtension.class)
public class MealServiceTest {
    @Mock
    private MealRepository mealRepository;
    @Mock
    private DailyMealRepository dailyMealRepository;
    @Mock
    private DailySummaryRepository dailySummaryRepository;
    @Mock
    private DailySummaryService dailySummaryService;
    @InjectMocks
    private MealService mealService;

    @Test
    public void testCreateDailyMeal() {
        AppUser user = new AppUser();
        user.setUsername("username");
        user.setBodyType(AppUser.BodyType.Ectomorph);
        user.setGender(AppUser.Gender.Male);
        user.setObjective(AppUser.Objective.LoseWeight);

        Meal meal = new Meal();
        meal.setId(1L);
        meal.setCalcium(12);
        meal.setCalories(22);
        meal.setFat(12);
        meal.setFiber(12);
        meal.setImage("IMAGESTRING");
        meal.setCarbs(22);
        meal.setIron(1);
        meal.setCholesterol(2);
        meal.setName("Spaghetti");
        meal.setIngredients(new ArrayList<>());
        meal.setProtein(22);
        meal.setInstructions(new ArrayList<>());


        DailySummary summary = new DailySummary();
        summary.setId(4l);
        summary.setDate(LocalDate.now());
        summary.setExercises(new ArrayList<>());
        summary.setUser(user);
        summary.setMeals(new ArrayList<>());

        DailyMeal dailyMeal = new DailyMeal();
        dailyMeal.setDailySummary(summary);
        dailyMeal.setMeal(meal);
        dailyMeal.setId(1L);

        when(mealRepository.findByName(any())).thenReturn(meal);
        when(dailyMealRepository.save(any())).thenReturn(dailyMeal);
        when(dailySummaryRepository.findByUser_UsernameAndDate(any(), any())).thenReturn(summary);

        DailyMealDto dto = mealService.createDailyMeal(new DailyMealDto(dailyMeal));

        assertEquals(dailyMeal.getDailySummary().getDate().toString(), dto.getDailySummaryDto().getDate());
        assertEquals(dailyMeal.getMeal().getId(), dto.getMealDto().getId());
    }

    @Test
    public void createMeal(){
        Meal meal = new Meal();
        meal.setId(1L);
        meal.setCalcium(12);
        meal.setCalories(22);
        meal.setFat(12);
        meal.setFiber(12);
        meal.setImage("IMAGESTRING");
        meal.setCarbs(22);
        meal.setIron(1);
        meal.setCholesterol(2);
        meal.setName("Spaghetti");
        meal.setIngredients(new ArrayList<>());
        meal.setProtein(22);
        meal.setInstructions(new ArrayList<>());

        when(mealRepository.save(any())).thenReturn(meal);

        MealDto dto = mealService.createMeal(new MealDto(meal));

        assertEquals(dto.getId(), meal.getId());
        assertEquals(dto.getName(), meal.getName());
        assertEquals(dto.getCarbs(), meal.getCarbs());
    }

}
