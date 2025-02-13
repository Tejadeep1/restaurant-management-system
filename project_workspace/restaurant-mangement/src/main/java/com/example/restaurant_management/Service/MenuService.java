package com.example.restaurant_management.Service;



import com.example.restaurant_management.model.Menu;
import com.example.restaurant_management.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {

    @Autowired
    private MenuRepository menuRepository;

    public Menu createMenu(Menu menu) {
        return menuRepository.save(menu);
    }

    public List<Menu> getAllMenus() {
        return menuRepository.findAll();
    }

    public Menu getMenuById(Long id) {
        return menuRepository.findById(id).orElse(null);
    }

    public Menu updateMenu(Long id, Menu menuDetails) {
        Menu menu = menuRepository.findById(id).orElse(null);
        if (menu != null) {
            menu.setName(menuDetails.getName());
            menu.setDescription(menuDetails.getDescription());
            menu.setPrice(menuDetails.getPrice());
            menu.setCategory(menuDetails.getCategory());
            menu.setQuantity(menuDetails.getQuantity()); // Update quantity

            menu.setImageUrl(menuDetails.getImageUrl()); // Update image URL
            return menuRepository.save(menu);
        }
        return null;
    }
    
    public Menu reduceQuantity(Long id, int quantity) {
        Menu menu = menuRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Menu item not found"));
        if (menu.getQuantity() < quantity) {
            throw new RuntimeException("Not enough quantity in stock");
        }
        menu.setQuantity(menu.getQuantity() - quantity);
        return menuRepository.save(menu);
    }

    public void deleteMenu(Long id) {
        menuRepository.deleteById(id);
    }
}