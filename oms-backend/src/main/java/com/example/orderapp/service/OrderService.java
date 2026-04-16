package com.example.orderapp.service;

import com.example.orderapp.entity.Order1;
import com.example.orderapp.entity.OrderLine;
import com.example.orderapp.repository.Order1Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

	@Autowired
	private Order1Repository repo;

	public Order1 createOrder(Order1 order) {

		if (order.getName() == null || order.getName().isBlank()) {
			throw new IllegalArgumentException("Order name is required");
		}
		if (order.getAddress() == null || order.getAddress().isBlank()) {
			throw new IllegalArgumentException("Address is required");
		}
		if (order.getItems() == null || order.getItems().isEmpty()) {
			throw new IllegalArgumentException("Each Order must have atleast one item");
		}

		order.setStatus("CREATED");

		if (order.getItems() != null) {
			for (OrderLine item : order.getItems()) {
				if(item.getItem() == null || item.getItem().isBlank()) {
					throw new IllegalArgumentException("Item name is required");
				}
				if(item.getPrice() < 0) {
					throw new IllegalArgumentException("price must be greater than or equal to )");
				}
				if(item.getQuantity()<1) {
					throw new IllegalArgumentException("quantity must be greater or equal to 1 ");
				}

				item.setOrder(order);
			}
		}

		return repo.save(order);
	}
}