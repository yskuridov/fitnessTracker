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
    private List<String> instructions;
    private double servingPortion;
    private double calories;
    private double protein;
    private double carbs;
    private double fat;
    private double transFat;
    private double sugar;
    private double fiber;
    private double calcium;
    private double sodium;
    private double cholesterol;

    private double iron;

    public MealDto(Meal meal){
        this.id = meal.getId();
        this.name = meal.getName();
        this.image = meal.getImage();
        this.ingredients = meal.getIngredients();
        this.transFat = meal.getTransFat();
        this.sugar = meal.getSugar();
        this.calories = meal.getCalories();
        this.iron = meal.getIron();
        this.servingPortion = meal.getServingPortion();
        this.protein = meal.getProtein();
        this.carbs = meal.getCarbs();
        this.fat = meal.getFat();
        this.fiber = meal.getFiber();
        this.calcium = meal.getCalcium();
        this.sodium = meal.getSodium();
        this.cholesterol = meal.getCholesterol();
        this.instructions = meal.getInstructions();
    }
}
