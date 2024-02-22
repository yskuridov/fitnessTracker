package com.example.fitnesstracker.models.user;

import com.example.fitnesstracker.models.DailySummary;
import com.example.fitnesstracker.models.Meal;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.ToString;

import java.util.List;

@Entity
@DiscriminatorValue("User")
public class AppUser extends SystemUser {
    @OneToMany(mappedBy = "user")
    @ToString.Exclude
    private List<DailySummary> statistics;
    @ToString.Exclude
    private List<Meal> savedMeals;
}
