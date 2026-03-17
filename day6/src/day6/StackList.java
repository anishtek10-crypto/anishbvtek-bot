package day6;

import java.util.ArrayList;
import java.util.List;

public class StackList {
    int size = 5;
    List<Integer> stack = new ArrayList<>();
    void push(int x) {
        if (stack.size() == size) {
            System.out.println("stack overflow");
        } else {
            stack.add(x);
        }
    }
    int pop() {
        if (stack.isEmpty()) {
            System.out.println("stack underflow");
            return -1;
        }
        return stack.remove(stack.size() - 1);
    }
}