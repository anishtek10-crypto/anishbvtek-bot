package com.example.orderapp.service;

import com.example.orderapp.entity.Order1;
import com.example.orderapp.entity.OrderLine;
import com.example.orderapp.repository.Order1Repository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertThrows;

@ExtendWith(MockitoExtension.class)
class OrderServiceTest {
	@Mock
	private Order1Repository repo;
	@InjectMocks
	private OrderService service;

	@Test
	void shouldThrowException_whenItemNameMissing() {
		OrderLine line = new OrderLine();
		line.setItem("");
		line.setPrice(100);
		Order1 order = new Order1();
		order.setName("Test Order");
		order.setItems(List.of(line));
		assertThrows(IllegalArgumentException.class, () -> {
			service.createOrder(order);
		});
	}

	@Test
	void shouldThrowException_whenPriceIsNegative() {
		OrderLine line = new OrderLine();
		line.setItem("bat");
		line.setPrice(-10);
		Order1 order = new Order1();
		order.setName("Test Order");
		order.setItems(List.of(line));
		assertThrows(IllegalArgumentException.class, () -> {
			service.createOrder(order);
		});
	}
	@Test
	void shouldThrowException_whenAddressIsInvalid() {
		OrderLine line = new OrderLine();
		line.setItem("Bat");
		line.setPrice(100);
		Order1 order = new Order1();
		order.setName("Test Order");
		order.setAddress("");
		order.setItems(List.of(line));
		assertThrows(IllegalArgumentException.class,()->{
			service.createOrder(order);
		});
	}
	@Test
	void shouldThrowException_whenOrderHasNoItems() {
		Order1 order = new Order1();
		order.setName("Test Order");
		order.setAddress("Mysore");
		order.setItems(List.of());
		assertThrows(IllegalArgumentException.class,()->{
			service.createOrder(order);
		});
	}
	@Test
	void shouldThrowException_whenQuantityIsInvalid() {
		OrderLine line = new OrderLine();
		line.setItem("Bat");
		line.setPrice(100);
		line.setQuantity(0);
		Order1 order = new Order1();
		order.setName("Test Order");
		order.setAddress("Mysore");
		order.setItems(List.of(line));
		assertThrows(IllegalArgumentException.class,()->{
			service.createOrder(order);
		});
	}
	
}
