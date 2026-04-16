package com.example.orderapp.controller;

import com.example.orderapp.dto.OrderResponse;
import com.example.orderapp.entity.Order1;
import com.example.orderapp.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/orders")
@CrossOrigin
public class OrderController {

    @Autowired
    private OrderService service;

    @PostMapping
    public OrderResponse createOrder(@RequestBody Order1 order) {

        Order1 saved = service.createOrder(order);

        return new OrderResponse(saved.getId());
    }
}