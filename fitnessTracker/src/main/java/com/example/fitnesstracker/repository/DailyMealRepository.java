package com.example.fitnesstracker.repository;

import com.example.fitnesstracker.models.nutrition.DailyMeal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface DailyMealRepository extends JpaRepository<DailyMeal, Long> {
    List<DailyMeal> findAllByDailySummary_User_UsernameAndDailySummary_Date(String username, LocalDate date);
}
