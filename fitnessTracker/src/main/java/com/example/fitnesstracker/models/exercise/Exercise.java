package com.example.fitnesstracker.models.exercise;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Muscle targetMuscle;
    private String imageUrl;
    @ElementCollection
    @CollectionTable(name = "exercise_instructions", joinColumns = @JoinColumn(name = "exercise_id"))
    private List<String> instructions;


    public enum Muscle{
        back,
        chest,
        shoulders,
        legs,
        core,
        arms
    }
}
