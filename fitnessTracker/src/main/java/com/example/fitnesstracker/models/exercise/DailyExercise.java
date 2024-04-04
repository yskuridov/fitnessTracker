package com.example.fitnesstracker.models.exercise;

import com.example.fitnesstracker.models.DailySummary;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class DailyExercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "dailySummary_id")
    private DailySummary dailySummary;
    @OneToOne
    @JoinColumn(name = "exercise_id")
    private Exercise exercise;
}