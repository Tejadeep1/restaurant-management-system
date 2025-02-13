package com.example.restaurant_management.repository;


import com.example.restaurant_management.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
}