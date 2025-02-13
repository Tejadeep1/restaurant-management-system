package com.example.restaurant_management.Service;

import com.example.restaurant_management.model.Cart;
import com.example.restaurant_management.model.Menu;
import com.example.restaurant_management.model.User;
import com.example.restaurant_management.repository.CartRepository;
import com.example.restaurant_management.repository.MenuRepository;
import com.example.restaurant_management.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MenuRepository menuRepository;
    
    public Cart addToCart(Cart cart) {
        return cartRepository.save(cart);
    }

    

    public List<Cart> getAllCartItems() {
        return cartRepository.findAll();
    }

    public void removeItemFromCart(Long cartId) {
        cartRepository.deleteById(cartId);
    }
}