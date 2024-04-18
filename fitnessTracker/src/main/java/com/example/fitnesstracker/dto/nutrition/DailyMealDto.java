package com.example.fitnesstracker.dto.nutrition;

import com.example.fitnesstracker.dto.DailySummaryDto;
import com.example.fitnesstracker.models.nutrition.DailyMeal;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@ToString
@NoArgsConstructor
public class DailyMealDto {
    @ToString.Exclude
    private Long id;
    private DailySummaryDto dailySummaryDto;
    private MealDto mealDto;

    public DailyMealDto(DailyMeal dailyMeal){
        this.dailySummaryDto = new DailySummaryDto(dailyMeal.getDailySummary());
        this.mealDto = new MealDto(dailyMeal.getMeal());
    }
}
