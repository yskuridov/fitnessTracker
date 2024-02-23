package com.example.fitnesstracker.models.user;

import com.example.fitnesstracker.models.DailySummary;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Entity
@DiscriminatorValue("User")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AppUser extends SystemUser {
    @OneToMany(mappedBy = "user")
    @ToString.Exclude
    private List<DailySummary> statistics;
    private double weight;
    private double height;
    private int age;
    private int dailyCalories;
    @Enumerated(EnumType.STRING)
    private BodyType bodyType;
    @Enumerated(EnumType.STRING)
    private Objective objective;

    public enum BodyType{
        Ectomorph,
        Endomorph,
        Mesomorph
    }

    public enum Objective{
        LoseWeight,
        MaintainWeight,
        GainWeight
    }
}
