package com.example.restaurant_management.Service;



import com.example.restaurant_management.model.RestaurantTable;
import com.example.restaurant_management.repository.RestaurantTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantTableService {

    @Autowired
    private RestaurantTableRepository restaurantTableRepository;

    public RestaurantTable createTable(RestaurantTable table) {
        return restaurantTableRepository.save(table);
    }

    public List<RestaurantTable> getAllTables() {
        return restaurantTableRepository.findAll();
    }

    public RestaurantTable getTableById(Long id) {
        return restaurantTableRepository.findById(id).orElse(null);
    }

    public RestaurantTable updateTable(Long id, RestaurantTable tableDetails) {
        RestaurantTable table = restaurantTableRepository.findById(id).orElse(null);
        if (table != null) {
            table.setTableNumber(tableDetails.getTableNumber());
            table.setSeats(tableDetails.getSeats());
            return restaurantTableRepository.save(table);
        }
        return null;
    }

    public void deleteTable(Long id) {
        restaurantTableRepository.deleteById(id);
    }
}