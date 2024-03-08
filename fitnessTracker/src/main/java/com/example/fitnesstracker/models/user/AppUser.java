package com.example.fitnesstracker.models.user;

import com.example.fitnesstracker.models.DailySummary;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Entity
@DiscriminatorValue("User")
@NoArgsConstructor
@SuperBuilder
@Data
@EqualsAndHashCode(callSuper = false)
public class AppUser extends SystemUser {
    @OneToMany(mappedBy = "user")
    @ToString.Exclude
    private List<DailySummary> statistics;
    private double weight;
    private double height;
    private int age;
    @Enumerated(EnumType.STRING)
    private Gender gender;
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

    public enum Gender{
        Male,
        Female
    }
}
