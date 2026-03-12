
package basics;
import java.util.*;

public class freq {
    public static void main(String[] args) {

        List<Integer> list1 = Arrays.asList(1, 2, 3, 2, 4, 5);
        int target = 3;  

        int frequency = Collections.frequency(list1, target);

        System.out.println("Frequency of " + target + " = " + frequency);
    }
}
