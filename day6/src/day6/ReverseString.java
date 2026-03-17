package day6;
import java.util.Stack;

public class ReverseString {
    public static void main(String[] args) {
        String str = "hello";
        Stack<Character> stack = new Stack<>();
        for (int i = 0; i < str.length(); i++) {
            stack.push(str.charAt(i));
        }
        String reversed = "";
        while (!stack.isEmpty()) {
            reversed += stack.pop();
        }
        System.out.println("Original: " + str);
        System.out.println("Reversed: " + reversed);
    }
}