package com.example.fitnesstracker.controller;


import com.example.fitnesstracker.dto.nutrition.DailyMealDto;
import com.example.fitnesstracker.dto.nutrition.MealDto;
import com.example.fitnesstracker.models.DailySummary;
import com.example.fitnesstracker.models.nutrition.DailyMeal;
import com.example.fitnesstracker.models.nutrition.Meal;
import com.example.fitnesstracker.models.user.AppUser;
import com.example.fitnesstracker.service.MealService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDate;
import java.util.ArrayList;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc(addFilters = false)
@WebMvcTest(MealController.class)
public class MealControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private MealService mealService;

    @Test
    public void testCreateMeal() throws Exception {
        ObjectMapper mapper = new ObjectMapper();

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

        MealDto dto = new MealDto(meal);

        String jsonContent = mapper.writeValueAsString(dto);

        when(mealService.createMeal(any())).thenReturn(dto);

        mockMvc.perform(post("/meals")
                        .contentType("application/json")
                        .content(jsonContent))
                .andExpect(status().isOk());
    }

    @Test
    public void testCreateDailyMeal() throws Exception {
        ObjectMapper mapper = new ObjectMapper();


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
        summary.setUser(new AppUser());
        summary.setId(4l);
        summary.setDate(LocalDate.now());
        summary.setMeals(new ArrayList<>());
        summary.setWaterIntake(2000);

        DailyMeal dailyMeal = new DailyMeal();
        dailyMeal.setDailySummary(summary);
        dailyMeal.setMeal(meal);
        dailyMeal.setId(1L);

        DailyMealDto dto = new DailyMealDto(dailyMeal);

        String jsonContent = mapper.writeValueAsString(dto);

        when(mealService.createDailyMeal(any())).thenReturn(dto);

        mockMvc.perform(post("/dailyMeal")
                        .contentType("application/json")
                        .content(jsonContent))
                .andExpect(status().isOk());
    }
}
