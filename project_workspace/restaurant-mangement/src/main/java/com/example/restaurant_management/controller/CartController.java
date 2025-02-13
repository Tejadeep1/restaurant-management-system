package com.example.restaurant_management.controller;



import com.example.restaurant_management.model.Cart;
import com.example.restaurant_management.Service.CartService;
import com.example.restaurant_management.Service.MenuService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;
    @Autowired
    private MenuService menuService;
    
    @GetMapping
    public ResponseEntity<List<Cart>> getCartItems() {
        List<Cart> cartItems = cartService.getAllCartItems();
        return ResponseEntity.ok(cartItems);
    }

    @PostMapping
    public ResponseEntity<Cart> addToCart(@RequestBody Cart cart) {
        // Reduce the quantity in the menu table
        menuService.reduceQuantity(cart.getMenuId(), cart.getQuantity());

        // Add the item to the cart
        Cart savedCart = cartService.addToCart(cart);
        return ResponseEntity.ok(savedCart);
    }
    
    
    @DeleteMapping("/{cartId}")
    public ResponseEntity<Void> removeItemFromCart(@PathVariable Long cartId) {
        cartService.removeItemFromCart(cartId);
        return ResponseEntity.noContent().build(); // 204 No Content
    }
}