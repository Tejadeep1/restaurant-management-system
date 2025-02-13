package com.example.restaurant_management.repository;


import com.example.restaurant_management.model.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {
}