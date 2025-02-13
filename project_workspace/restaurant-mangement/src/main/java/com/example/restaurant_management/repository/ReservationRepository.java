package com.example.restaurant_management.repository;


import com.example.restaurant_management.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
}