package com.example.restaurant_management.Service;

import com.example.restaurant_management.model.Inventory;
import com.example.restaurant_management.repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryService {

    @Autowired
    private InventoryRepository inventoryRepository;

    public Inventory createItem(Inventory item) {
        return inventoryRepository.save(item);
    }

    public List<Inventory> getAllItems() {
        return inventoryRepository.findAll();
    }

    public Inventory getItemById(Long id) {
        return inventoryRepository.findById(id).orElse(null);
    }

    public Inventory updateItem(Long id, Inventory itemDetails) {
        Inventory item = inventoryRepository.findById(id).orElse(null);
        if (item != null) {
            item.setItemName(itemDetails.getItemName());
            item.setQuantity(itemDetails.getQuantity());
            item.setPrice(itemDetails.getPrice());
            return inventoryRepository.save(item);
        }
        return null;
    }

    public void deleteItem(Long id) {
        inventoryRepository.deleteById(id);
    }
}