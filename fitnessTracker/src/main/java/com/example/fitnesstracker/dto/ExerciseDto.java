package com.example.fitnesstracker.dto;

import com.example.fitnesstracker.models.exercise.Exercise;
import jakarta.annotation.Nullable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExerciseDto {
    @Nullable
    private Long id;
    private String name;
    private String targetMuscle;

    public ExerciseDto(Exercise exercise) {
        this.id = exercise.getId();
        this.name = exercise.getName();
        this.targetMuscle = exercise.getTargetMuscle().toString();
    }
}
