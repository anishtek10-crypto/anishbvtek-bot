package basics;

import java.util.HashSet;
import java.util.TreeSet;

public class treeset {
	public static void main(String[]args) {
		TreeSet<Integer> numbers = new TreeSet<>();
		numbers.add(10);
		numbers.add(20);
		numbers.add(15);
		numbers.add(5);
		numbers.remove(15);
		System.out.println(numbers);
	}

}


