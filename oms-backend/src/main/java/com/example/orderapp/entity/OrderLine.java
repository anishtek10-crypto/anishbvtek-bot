package com.example.orderapp.entity;

import jakarta.persistence.*;
 
import com.fasterxml.jackson.annotation.JsonBackReference;
 
@Entity
public class OrderLine {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
 
    private String item;
    private double price;
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order1 order;
  
    public int getId() {
        return id;
    }
 
    public void setId(int id) {
        this.id = id;
    }
 
 
    public String getItem() {
        return item;
    }
 
    public void setItem(String item) {
        this.item = item;
    }
 
 
    public double getPrice() {
        return price;
    }
 
    public void setPrice(double price) {
        this.price = price;
    }
 
 
    public Order1 getOrder() {
        return order;
    }
 
    public void setOrder(Order1 order) {
        this.order = order;
    }
}