package com.example.fitnesstracker.models;

import com.example.fitnesstracker.models.exercise.DailyExercise;
import com.example.fitnesstracker.models.exercise.Exercise;
import com.example.fitnesstracker.models.user.AppUser;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class DailySummary {
    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private AppUser user;
    private double waterIntake;
    private LocalDateTime date;
    @OneToMany(mappedBy = "dailySummary", cascade = CascadeType.ALL)
    private List<DailyExercise> exercises;
    //private List<DailyMeal> meals;
    //private List<Meal> meals;
}
