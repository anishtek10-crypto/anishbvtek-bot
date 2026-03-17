package day6;

import java.util.Arrays;

public class RotateArray {
    public static void main(String[] args) {
        int[] array = {1, -2, -7, -8};
        int[] result = rotateArray(array, 2);
        System.out.println(Arrays.toString(result));
    }
    static int[] rotateArray(int[] array, int times) {
        int n = array.length;
        int[] result = new int[n];
        times = times % n;
        for (int i = 0; i < n; i++) {
            result[i] = array[(i + times) % n];
        }
        return result;
    }
}