package day5;
import java.io.*;
import java.util.List;
 
public class Saving {
 
    public static void saveBooks(List<Book> books) {
 
        try {
 
            ObjectOutputStream out =
                    new ObjectOutputStream(new FileOutputStream("books.dat"));
 
            out.writeObject(books);
 
            out.close();
 
            System.out.println("Books saved successfully");
 
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
 
    @SuppressWarnings("unchecked")
    public static List<Book> loadBooks() {
 
        try {
 
            ObjectInputStream in =
                    new ObjectInputStream(new FileInputStream("books.dat"));
 
            List<Book> books = (List<Book>) in.readObject();
 
            in.close();
 
            System.out.println("Books loaded successfully");
 
            return books;
 
        } catch (Exception e) {
 
            System.out.println("No saved books found");
            return null;
        }
    }
}