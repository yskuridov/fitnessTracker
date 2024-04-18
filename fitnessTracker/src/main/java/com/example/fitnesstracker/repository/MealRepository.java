package com.example.fitnesstracker.repository;

import com.example.fitnesstracker.models.nutrition.Meal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MealRepository extends JpaRepository<Meal, Long> {
    Meal findByName(String name);
    boolean existsByName(String name);
}
