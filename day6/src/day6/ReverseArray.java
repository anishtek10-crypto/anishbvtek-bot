package day6;
import java.util.Arrays;

public class ReverseArray {
    public static void main(String[] args) {
        int[] array = {10,20,30,40,50};
        int[] reversed = new int[array.length];

        for(int i = 0; i < array.length; i++) {
            reversed[i] = array[array.length - 1 - i];
        }

        System.out.println("Reversed Array: " + Arrays.toString(reversed));
    }
}