package com.example.orderapp.entity;

import jakarta.persistence.*;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.*;

@Entity
public class Order1 {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String status;
	@JsonManagedReference

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
}