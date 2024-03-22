package com.example.fitnesstracker.models.exercise;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


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

    public enum Muscle{
        back,
        chest,
        shoulders,
        legs,
        core,
        arms
    }
}
