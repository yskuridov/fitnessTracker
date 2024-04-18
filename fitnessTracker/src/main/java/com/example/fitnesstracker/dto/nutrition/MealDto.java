package com.example.fitnesstracker.dto.nutrition;

import com.example.fitnesstracker.models.nutrition.Meal;
import jakarta.annotation.Nullable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MealDto {
    @Nullable
    private Long id;
    private String name;
    private String image;
    private List<String> ingredients;
    private double servingPortion;
    private double calories;
    private double protein;
    private double carbs;
    private double fat;
    private double fiber;
    private double calcium;
    private double sodium;
    private double cholesterol;

    public MealDto(Meal meal){
        this.id = meal.getId();
        this.name = meal.getName();
        this.image = meal.getImage();
        this.ingredients = meal.getIngredients();
        this.calories = meal.getCalories();
        this.servingPortion = meal.getServingPortion();
        this.protein = meal.getProtein();
        this.carbs = meal.getCarbs();
        this.fat = meal.getFat();
        this.fiber = meal.getFiber();
        this.calories = meal.getCalcium();
        this.sodium = meal.getSodium();
        this.cholesterol = meal.getCholesterol();
        this.calcium = meal.getCalcium();
    }
}
