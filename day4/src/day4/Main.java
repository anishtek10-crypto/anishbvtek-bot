package day4;

import java.util.*;

public class Main {
 
    public static void main(String[] args) {
 
        Scanner sc = new Scanner(System.in);
 
        Library li = new Library();
 
        System.out.println("Enter Book Id");
        int id = sc.nextInt();
        sc.nextLine();
 
        System.out.println("Enter Book Title");
        String title = sc.nextLine();
 
        System.out.println("Enter Book Price");
        float price = sc.nextFloat();
        sc.nextLine();
 
        System.out.println("Enter Book Author");
        String author = sc.nextLine();
 
        li.addBook(id,title,price,author);
    }
}
