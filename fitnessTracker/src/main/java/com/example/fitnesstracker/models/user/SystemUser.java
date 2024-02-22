package com.example.fitnesstracker.models.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "user_type")
@Data
@NoArgsConstructor
public abstract class SystemUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(unique = true)
    private String username;
    @JsonIgnore
    private String password;
    @Enumerated(EnumType.STRING)
    private UserTypes type;

    public enum UserTypes{
        User,
        Admin
    }
}


