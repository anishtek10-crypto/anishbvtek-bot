package day4;

public class Book {
	int id;
    String title;
    float price;
    String author;
    boolean reserved;
 
    public Book(int id, String title, float price, String author) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.author = author;
        this.reserved = false;
    }
}


