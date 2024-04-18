package com.example.fitnesstracker.models.nutrition;

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
public class DailyMeal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "dailySummary_id")
    private DailySummary dailySummary;
    @OneToOne
    @JoinColumn(name = "meal_id")
    private Meal meal;
}
