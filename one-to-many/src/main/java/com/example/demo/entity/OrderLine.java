package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "order_lines")
public class OrderLine {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String product;
	private int quantity;

	@ManyToOne
	@JoinColumn(name = "order_id")
	private Order order;

	public OrderLine() {
	}

	public OrderLine(String product, int quantity, Order order) {
		this.product = product;
		this.quantity = quantity;
		this.order = order;
	}

	public Long getId() {
		return id;
	}

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}
}