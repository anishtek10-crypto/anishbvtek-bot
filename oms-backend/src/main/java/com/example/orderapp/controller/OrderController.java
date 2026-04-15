package com.example.orderapp.controller;
 
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.orderapp.dto.OrderResponse;
import com.example.orderapp.entity.Order1;
import com.example.orderapp.entity.OrderLine;
import com.example.orderapp.repository.Order1Repository;
 
@RestController
@RequestMapping("/orders")
@CrossOrigin
public class OrderController {
 
    @Autowired
    private Order1Repository repo;
 
    @PostMapping
    public Map<String, Integer> createOrder(@RequestBody Order1 order) {
     
        if (order.getItems() != null) {
            for (OrderLine item : order.getItems()) {
                item.setOrder(order);
            }
        }
     
        Order1 savedOrder = repo.save(order);
     
        return Map.of("orderId", savedOrder.getId());
    }
}