package com.example.fitnesstracker;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FitnessTrackerApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(FitnessTrackerApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
    }
}
