package com.example.restaurant_management.controller;


import com.example.restaurant_management.model.User;
import com.example.restaurant_management.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser (@RequestBody User user) {
        User registeredUser  = userService.registerUser (user);
        return ResponseEntity.ok(registeredUser );
    }

    @PostMapping("/login")
    public ResponseEntity<User> loginUser (@RequestBody User user) {
        User foundUser  = userService.findByUsername(user.getUsername());
        if (foundUser  != null && foundUser .getPassword().equals(user.getPassword())) {
            // Optionally check the role if needed
            if (user.getRole() != null && !user.getRole().equals(foundUser .getRole())) {
                return ResponseEntity.status(403).build(); // Forbidden if roles do not match
            }
            return ResponseEntity.ok(foundUser );
        }
        return ResponseEntity.status(401).build();
    }
//    public ResponseEntity<User> loginUser (@RequestBody User user) {
//        User foundUser  = userService.findByUsername(user.getUsername());
//        if (foundUser  != null && passwordEncoder.matches(user.getPassword(), foundUser .getPassword())) {
//            return ResponseEntity.ok(foundUser );
//        }
//        return ResponseEntity.status(401).build();
     
}