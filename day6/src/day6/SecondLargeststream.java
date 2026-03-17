package day6;

import java.util.Arrays;

public class SecondLargeststream {
    public static void main(String[] args) {
        int[] arr = {3, 1, 9, -5, -4};

        int secondLargest = Arrays.stream(arr)   
                                  .distinct()   
                                  .boxed()     
                                  .sorted((a, b) -> b - a) 
                                  .skip(1)     
                                  .findFirst() 
                                  .orElseThrow(() -> new RuntimeException("No second largest element"));
        System.out.println(secondLargest);
    }
}