package com.example.fitnesstracker.repository;

import com.example.fitnesstracker.models.exercise.DailyExercise;
import org.springframework.cglib.core.Local;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface DailyExerciseRepository extends JpaRepository<DailyExercise, Long> {
    List<DailyExercise> findAllByDailySummary_User_UsernameAndDailySummary_Date(String username, LocalDate date);
}
