package com.example.fitnesstracker.models;

import com.example.fitnesstracker.models.exercise.DailyExercise;
import com.example.fitnesstracker.models.nutrition.DailyMeal;
import com.example.fitnesstracker.models.user.AppUser;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
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
    private LocalDate date;
    @OneToMany(mappedBy = "dailySummary", cascade = CascadeType.ALL)
    private List<DailyExercise> exercises;
    @OneToMany(mappedBy = "dailySummary", cascade = CascadeType.ALL)
    private List<DailyMeal> meals;
    //private List<DailyMeal> meals;
    //private List<Meal> meals;
}
