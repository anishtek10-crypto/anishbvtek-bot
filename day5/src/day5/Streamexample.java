package day5;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
public class Streamexample {
	public static void main(String[] args) {
		//stream1();
		streamWithChain();
	}
	private static void streamWithChain() {
		List<Integer> numbers = Arrays.asList(1,2,3,4,5);//tank
		Stream<Integer> finalstream = numbers.stream().map((number) -> {
			if(number % 2 ==1) {
				return number * number;}
			
			else {
				return number;//pipe
			}
		}).filter((number)->{
			System.out.println(number);
			return number % 2 != 0;
		});
		List finalList = finalstream.collect(Collectors.toList());
		finalList.forEach(x->System.out.println(x));
		finalList.forEach(System.out::println);

		
		//System.out.println(finalstream.count());
	}
	private static void stream1() {
		List<Integer> numbers = Arrays.asList(1,2,3,4,5);//tank
		Stream<Integer> stream = numbers.stream();//pipe
		Stream<Integer> squaredStream = stream.map(number -> number * number);
		Stream filteredStream = squaredStream.filter((number) ->{
			System.out.println(number);
			return number % 2 !=0;
		});
		System.out.println(filteredStream.count());
	}

}