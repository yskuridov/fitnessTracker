package com.example.fitnesstracker.repository;

import com.example.fitnesstracker.models.exercise.DailyExercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DailyExerciseRepository extends JpaRepository<DailyExercise, Long> {
    @Query("SELECT exercise FROM DailyExercise exercise LEFT JOIN FETCH exercise.dailySummary WHERE exercise.dailySummary.id = :id")
    List<DailyExercise> findAllByDailySummaryId(Long id);

    List<DailyExercise> findAllByDailySummaryUser_Username(String username);
}
