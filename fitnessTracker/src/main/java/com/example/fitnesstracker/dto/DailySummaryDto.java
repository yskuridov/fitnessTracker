package com.example.fitnesstracker.dto;

import com.example.fitnesstracker.models.DailySummary;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DailySummaryDto {
    private String username;
    private String date;

    public DailySummaryDto(DailySummary summary) {
        this.username = summary.getUser().getUsername();
        this.date = summary.getDate().toString();
    }
}
