package com.example.orderapp.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Order1 {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String status;
	private String address;

	@OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
	private List<OrderLine> items;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<OrderLine> getItems() {
		return items;
	}

	public void setItems(List<OrderLine> items) {
		this.items = items;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
}
