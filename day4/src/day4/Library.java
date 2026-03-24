package day4;

import java.util.*;
import java.io.*;
 
public class Library {
 
    List<Book> list = new ArrayList<>();
 
    void addBook(int id, String title, float price, String author)
    {
        try
        {
            Book b = new Book(id, title, price, author);
            list.add(b);
 
            FileWriter fw = new FileWriter("output.txt", true);
 
            fw.write("ID: " + id + " ");
            fw.write("Title: " + title + " ");
            fw.write("Price: " + price + " ");
            fw.write("Author: " + author);
            fw.write("\n");
 
            fw.close();
 
            System.out.println("Book added and saved to file");
 
        }
        catch(IOException e)
        {
            System.out.println("Error writing to file");
        }
    }
}