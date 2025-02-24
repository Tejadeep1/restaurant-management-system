package com.example.restaurant_management.model;


import jakarta.persistence.*;


@Entity
@Table(name = "reservations")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Primary key for the reservation

    private String name;

   
    private String email;


    private String phone;


    private int guests; // Number of guests


    private int tableNumber; // Table number

 

    // Default constructor
    public Reservation() {
    }

    // Parameterized constructor
    public Reservation(String name, String email, String phone, int guests, int tableNumber) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.guests = guests;
        this.tableNumber = tableNumber;
      
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getGuests() {
        return guests;
    }

    public void setGuests(int guests) {
        this.guests = guests;
    }

    public int getTableNumber() {
        return tableNumber;
    }

    public void setTableNumber(int tableNumber) {
        this.tableNumber = tableNumber;
    }

   
}