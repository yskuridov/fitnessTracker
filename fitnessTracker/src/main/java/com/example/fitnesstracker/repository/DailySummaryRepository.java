package com.example.fitnesstracker.repository;

import com.example.fitnesstracker.models.DailySummary;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface DailySummaryRepository extends JpaRepository<DailySummary, Long> {
    DailySummary findByUser_UsernameAndDate(String username, LocalDate date);
    List<DailySummary> findAllByUser_Username(String username);
}
