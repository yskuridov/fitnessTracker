package com.example.fitnesstracker.repository;

import com.example.fitnesstracker.models.DailySummary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DailySummaryRepository extends JpaRepository<DailySummary, Long> {
}
