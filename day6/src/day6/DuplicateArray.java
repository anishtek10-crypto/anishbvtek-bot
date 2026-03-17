package day6;
public class DuplicateArray {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 2, 4, 5, 1};

        System.out.println("Duplicate elements:");

        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    System.out.println(arr[i]);
                    break;
                }
            }
        }
    }
}
