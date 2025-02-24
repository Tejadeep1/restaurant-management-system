package com.example.restaurant_management.Service;


import com.example.restaurant_management.model.User;
import com.example.restaurant_management.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User registerUser (User user) {
        return userRepository.save(user);
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
//    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//
//    public User registerUser (User user) {
//        user.setPassword(passwordEncoder.encode(user.getPassword())); // Hash the password
//        // Save user to the database
//        return userRepository.save(user);
//    }
}