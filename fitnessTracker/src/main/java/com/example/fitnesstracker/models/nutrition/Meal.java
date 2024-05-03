package com.example.fitnesstracker.models.nutrition;

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
public class Meal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String image;
    @ElementCollection
    @CollectionTable(name = "meal instructions", joinColumns = @JoinColumn(name = "meal_id"))
    private List<String> instructions;
    @ElementCollection
    @CollectionTable(name = "meal_ingredients", joinColumns = @JoinColumn(name = "meal_id"))
    private List<String> ingredients;
    private double calories;
    private double servingPortion;
    private double transFat;
    private double sugar;
    private double carbs;
    private double iron;
    private double protein;
    private double fat;
    private double fiber;
    private double calcium;
    private double sodium;
    private double cholesterol;
}
