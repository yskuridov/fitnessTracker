package com.example.fitnesstracker.dto.exercise;

import com.example.fitnesstracker.dto.DailySummaryDto;
import com.example.fitnesstracker.models.exercise.DailyExercise;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@ToString
@NoArgsConstructor
public class DailyExerciseDto {
    @ToString.Exclude
    private Long id;
    private DailySummaryDto dailySummaryDto;
    private ExerciseDto exerciseDto;


    public DailyExerciseDto(DailyExercise dailyExercise) {
        this.id = dailyExercise.getId();
        this.dailySummaryDto = new DailySummaryDto(dailyExercise.getDailySummary());
        this.exerciseDto = new ExerciseDto(dailyExercise.getExercise());
    }
}
