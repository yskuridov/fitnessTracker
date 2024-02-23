package com.example.fitnesstracker.repository;

import com.example.fitnesstracker.models.user.AppAdmin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppAdminRepository extends JpaRepository<AppAdmin, Long> {

}
