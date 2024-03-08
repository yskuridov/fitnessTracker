package com.example.fitnesstracker.dto;

import com.example.fitnesstracker.models.exercise.DailyExercise;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;

@Data
@AllArgsConstructor
@ToString
public class DailyExerciseDto {
    @ToString.Exclude
    private Long id;
    private Long dailySummaryId;
    private Long exerciseId;
    private int nbReps;
    private int nbSets;
    private double restTime;

    public DailyExerciseDto(DailyExercise dailyExercise) {
        this.id = dailyExercise.getId();
        this.dailySummaryId = dailyExercise.getDailySummary().getId();
        this.exerciseId = dailyExercise.getExercise().getId();
        this.nbReps = dailyExercise.getNbReps();
        this.nbSets = dailyExercise.getNbSets();
        this.restTime = dailyExercise.getRestTime();
    }
}
