package com.example.restaurant_management.repository;


import com.example.restaurant_management.model.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuRepository extends JpaRepository<Menu, Long> {
}