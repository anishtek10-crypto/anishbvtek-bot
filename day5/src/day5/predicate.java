package day5;
import java.util.function.Predicate;
public class predicate {
	public static void main(String[] args) {
		Predicate<Integer> even = (Integer n) -> n%2==0;
		System.out.println(even.test(24));
	}

}
