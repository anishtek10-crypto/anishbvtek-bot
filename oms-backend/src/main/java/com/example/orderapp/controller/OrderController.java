package com.example.orderapp.controller;

import com.example.orderapp.dto.OrderResponse;
import com.example.orderapp.entity.Order1;
import com.example.orderapp.entity.OrderLine;
import com.example.orderapp.repository.Order1Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/orders")
@CrossOrigin
public class OrderController {

	@Autowired
	private Order1Repository repo;

	@PostMapping
	public OrderResponse createOrder(@RequestBody Order1 order) {

		order.setStatus("CREATED");

		if (order.getItems() != null) {
			for (OrderLine item : order.getItems()) {
				item.setOrder(order);
			}
		}

		Order1 saved = repo.save(order);

		return new OrderResponse(saved.getId());
	}
}
