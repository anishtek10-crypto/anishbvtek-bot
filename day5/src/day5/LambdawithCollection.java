package day5;

import java.util.*;

import java.util.function.Consumer;
 
public class LambdawithCollection {

	public static void main(String[] args) {

		List<String> names = Arrays.asList("Java", "Python", "Go");

		comparator();

//		consumer();

	}

	private static void comparator() {

		List<String> names = Arrays.asList("Java", "Python", "Go");

		names.sort((str1, str2) -> {

			return str2.length() - str1.length();

		});

		System.out.println(names);

	}
	private static void comparatorWithAnonymousInnerClass() {
		List<String> names = Arrays.asList("java","python");
		names.sort(new Comparator<String>() {
			public int compare (String o1,String o2) {
				return o1.length()-o2.length();
			}
			
		});
		System.out.println(names);
	}

	private static void consumer() {

		List<String> names = Arrays.asList("Java", "Python", "Go");

		//Consumer<String> consumer = (String name) -> System.out.println(name);   ALSO WORKS

//		Consumer<String> consumer = (name) -> System.out.println(name); ALSO WORKS

//		Consumer<String> consumer = name -> System.out.println(name); //ALSO WORKS

		Consumer<String> consumer = name -> {

			System.out.println("name");

			System.out.println(name);

		};

		names.forEach(consumer);

	}

}

 