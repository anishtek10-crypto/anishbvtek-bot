package com.example.orderapp.dto;
 
public class OrderResponse {
 
    private int id;
 
    public OrderResponse() {
    }
 
    public OrderResponse(int id) {
        this.id = id;
    }
 
    public int getId() {
        return id;
    }
 
    public void setId(int id) {
        this.id = id;
    }
}
 