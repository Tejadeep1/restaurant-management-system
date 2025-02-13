package com.example.restaurant_management.controller;



import com.example.restaurant_management.model.RestaurantTable;
import com.example.restaurant_management.Service.RestaurantTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tables")
public class RestaurantTableController {

    @Autowired
    private RestaurantTableService restaurantTableService;

    @PostMapping
    public RestaurantTable createTable(@RequestBody RestaurantTable table) {
        return restaurantTableService.createTable(table);
    }

    @GetMapping
    public List<RestaurantTable> getAllTables() {
        return restaurantTableService.getAllTables();
    }

    @GetMapping("/{id}")
    public ResponseEntity<RestaurantTable> getTableById(@PathVariable Long id) {
        RestaurantTable table = restaurantTableService.getTableById(id);
        return table != null ? ResponseEntity.ok(table) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<RestaurantTable> updateTable(@PathVariable Long id, @RequestBody RestaurantTable tableDetails) {
        RestaurantTable updatedTable = restaurantTableService.updateTable(id, tableDetails);
        return updatedTable != null ? ResponseEntity.ok(updatedTable) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTable(@PathVariable Long id) {
        restaurantTableService.deleteTable(id);
        return ResponseEntity.noContent().build(); // 204 No Content
    }
}