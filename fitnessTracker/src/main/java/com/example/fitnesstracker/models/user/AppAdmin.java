package com.example.fitnesstracker.models.user;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("Admin")
public class AppAdmin extends SystemUser {

}
