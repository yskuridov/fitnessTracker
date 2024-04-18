package com.example.fitnesstracker.dto.exercise;

import com.example.fitnesstracker.models.exercise.Exercise;
import jakarta.annotation.Nullable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExerciseDto {
    @Nullable
    private Long id;
    private String name;
    private String targetMuscle;
    private String imageUrl;
    private List<String> instructions;


    public ExerciseDto(Exercise exercise) {
        this.id = exercise.getId();
        this.name = exercise.getName();
        this.imageUrl = exercise.getImageUrl();
        this.targetMuscle = exercise.getTargetMuscle().toString();
        this.instructions = exercise.getInstructions();
    }
}
