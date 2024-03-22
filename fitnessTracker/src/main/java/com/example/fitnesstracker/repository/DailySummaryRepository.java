package com.example.fitnesstracker.repository;

import com.example.fitnesstracker.models.DailySummary;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;

public interface DailySummaryRepository extends JpaRepository<DailySummary, Long> {
    DailySummary findByUser_UsernameAndDate(String username, LocalDateTime date);
}
