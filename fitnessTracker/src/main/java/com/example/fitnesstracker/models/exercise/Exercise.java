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
    private String description;
    private Muscle targetMuscle;

    public enum Muscle{
        Back,
        Chest,
        Shoulders,
        Legs,
        Core,
        Arms
    }
}
