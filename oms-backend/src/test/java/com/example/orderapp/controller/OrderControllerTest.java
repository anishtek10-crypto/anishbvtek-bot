package com.example.orderapp.controller;
 
import com.example.orderapp.entity.Order1;
import com.example.orderapp.exception.GlobalExceptionHandler;
import com.example.orderapp.repository.Order1Repository;
 
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.test.web.servlet.MockMvc;
 
import static org.mockito.Mockito.when;
import static org.mockito.ArgumentMatchers.any;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
 
@WebMvcTest(OrderController.class)
@Import(GlobalExceptionHandler.class)   
public class OrderControllerTest {
 
    @Autowired
    private MockMvc mockMvc;
 
    @MockBean
    private Order1Repository repo;
 
    @Test
    void testCreateOrder() throws Exception {
 
        Order1 saved = new Order1();
        saved.setId(1);
 
        when(repo.save(any(Order1.class))).thenReturn(saved);
 
        mockMvc.perform(post("/orders")
                .contentType("application/json")
                .content("""
                {
                  "items":[
                    {"item":"Pen","price":10}
                  ]
                }
                """))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1));
    }
    @Test
    void testCreateOrder_EmptyItems() throws Exception {
     
        Order1 saved = new Order1();
        saved.setId(2);
     
        when(repo.save(any(Order1.class))).thenReturn(saved);
     
        mockMvc.perform(post("/orders")
                .contentType("application/json")
                .content("""
                {
                  "items":[]
                }
                """))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(2));
    }
    @Test
    void testCreateOrder_MultipleItems() throws Exception {
     
        Order1 saved = new Order1();
        saved.setId(3);
     
        when(repo.save(any(Order1.class))).thenReturn(saved);
     
        mockMvc.perform(post("/orders")
                .contentType("application/json")
                .content("""
                {
                  "items":[
                    {"item":"Pen","price":10},
                    {"item":"Book","price":50}
                  ]
                }
                """))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(3));
    }
    @Test
    void testCreateOrder_NoItemsField() throws Exception {
     
        Order1 saved = new Order1();
        saved.setId(4);
     
        when(repo.save(any(Order1.class))).thenReturn(saved);
     
        mockMvc.perform(post("/orders")
                .contentType("application/json")
                .content("""
                {
                }
                """))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(4));
    }
    @Test
    void testCreateOrder_LargePrice() throws Exception {
     
        Order1 saved = new Order1();
        saved.setId(5);
     
        when(repo.save(any(Order1.class))).thenReturn(saved);
     
        mockMvc.perform(post("/orders")
                .contentType("application/json")
                .content("""
                {
                  "items":[
                    {"item":"Laptop","price":100000}
                  ]
                }
                """))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(5));
    }
}
 