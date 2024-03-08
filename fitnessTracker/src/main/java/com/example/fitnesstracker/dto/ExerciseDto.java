package com.example.fitnesstracker.dto;

import com.example.fitnesstracker.models.exercise.Exercise;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExerciseDto {
    private Long id;
    private String name;
    private String description;
    private String targetMuscle;

    public ExerciseDto(Exercise exercise) {
        this.id = exercise.getId();
        this.description = exercise.getDescription();
        this.name = exercise.getName();
        this.targetMuscle = exercise.getTargetMuscle().toString();
    }
}
