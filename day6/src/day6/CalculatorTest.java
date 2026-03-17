package day6;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class CalculatorTest {

	@Test
	void testAdd() {
		Calculator math = new Calculator();
		int result = math.add(2, 5);
		assertEquals(7,result);
	}
	@Test
	void testAddNegativeAndPositiveNumbers() {
		Calculator math = new Calculator();
		int result = math.add(-2, 5);
		assertEquals(3,result);
	} 
	@Test
	void testDivide() {
		Calculator math = new Calculator();
		int result = math.divide(25, 5);
		assertEquals(3,result);
	} 
	@Test
	void testDivideByZero() {
		Calculator math = new Calculator();
		int result = math.add(25, 0);
		assertEquals(3,result);
	} 

}
