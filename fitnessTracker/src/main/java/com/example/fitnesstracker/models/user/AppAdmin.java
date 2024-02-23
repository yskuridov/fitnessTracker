package com.example.fitnesstracker.models.user;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Entity
@DiscriminatorValue("Admin")
@NoArgsConstructor
@SuperBuilder
public class AppAdmin extends SystemUser {

}
