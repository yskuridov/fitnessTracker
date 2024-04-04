package com.example.fitnesstracker.repository;

import com.example.fitnesstracker.models.exercise.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
    Exercise findByName(String name);
    boolean existsByName(String name);
}
