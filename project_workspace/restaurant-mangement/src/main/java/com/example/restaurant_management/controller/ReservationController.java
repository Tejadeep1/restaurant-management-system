package com.example.restaurant_management.controller;


import com.example.restaurant_management.model.Reservation;
import com.example.restaurant_management.Service.ReservationService;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;

    @PostMapping
    public ResponseEntity<Reservation> createReservation(@RequestBody Reservation request) {
    	
        try {
            // Parse the date and time from the request
            
        	
            // Create a new Reservation object
            Reservation reservation = new Reservation();
            
            reservation.setTableNumber(request.getTableNumber());
            reservation.setName(request.getName());
            reservation.setEmail(request.getEmail());
            reservation.setPhone(request.getPhone());
            reservation.setGuests(request.getGuests());

            // Save the reservation
            Reservation createdReservation = reservationService.createReservation(reservation);
            return ResponseEntity.ok(createdReservation);
        } catch (DateTimeParseException e) {
            return ResponseEntity.badRequest().body(null); // Handle parsing error
        }
    }
    
    @GetMapping
    public ResponseEntity<List<Reservation>> getAllReservations() {
        List<Reservation> reservations = reservationService.getAllReservations();
        return ResponseEntity.ok(reservations);
    }
    
    
}