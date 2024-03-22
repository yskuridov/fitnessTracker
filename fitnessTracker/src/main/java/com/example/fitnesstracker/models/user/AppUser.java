package com.example.fitnesstracker.models.user;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@NoArgsConstructor
@Data
@AllArgsConstructor
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
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
