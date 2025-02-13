package com.example.restaurant_management.Service;


import com.example.restaurant_management.model.Reservation;
import com.example.restaurant_management.repository.ReservationRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;

    public Reservation createReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

	public List<Reservation> getAllReservations() {
		// TODO Auto-generated method stub
		return reservationRepository.findAll();
	}
}
