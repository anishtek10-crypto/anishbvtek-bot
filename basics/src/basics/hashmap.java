package basics;

import java.util.*;

public class hashmap {
	public static void main(String[]args) {
		HashMap<Integer,String> map = new HashMap<>();
		map.put(1,"java");
	    map.put(2,"python");
		System.out.println(map);
		System.out.println(map.get(2));

}
}