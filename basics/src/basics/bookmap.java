package basics;

import java.util.*;

public class bookmap {
    private static class Book {
        String id;
        String title;
        String author;
        int price;
        String reservedBy;

        Book(String id, String title, String author, int price) {
            this.id = id;
            this.title = title;
            this.author = author;
            this.price = price;
            this.reservedBy = null;
        }

        boolean isReserved() {
            return reservedBy != null && !reservedBy.isBlank();
        }

        public String toString() {
            String status = isReserved() ? ("RESERVED by " + reservedBy) : "Available";
            return String.format("{id=%s, title='%s', author='%s', price=%d, status=%s}",
                    id, title, author, price, status);
        }
    }

    private static class InvalidOptionException extends Exception {
        InvalidOptionException(String message) {
            super(message);
        }
    }

    private static final Scanner SC = new Scanner(System.in);
    private static final Map<String, Book> BOOKS = new LinkedHashMap<>();
    public static void main(String[] args) {
        BOOKS.put("A1", new Book("A1", "zero to one", "anish", 100));
        BOOKS.put("B2", new Book("B2", "shallow", "ashish", 200));

        System.out.println("Welcome to the Book Console!");

        while (true) {
            try {
                int choice = showMenuAndGetChoice();
                switch (choice) {
                    case 1 -> addBook();
                    case 2 -> removeBook();
                    case 3 -> reserveBook();
                    case 4 -> displayBooks();
                    case 5 -> {
                        System.out.println("Exiting.. Goodbye!");
                        return;
                    }
                    default -> throw new InvalidOptionException("Invalid menu option: " + choice);
                }
            } catch (InvalidOptionException e) {
                System.out.println("Error " + e.getMessage());
            } catch (InputMismatchException e) {
                System.out.println("Error Please enter a valid number.");
                SC.nextLine();
            } catch (Exception e) {
                System.out.println("Unexpected Error " + e.getMessage());
            }
        }
    }

    private static int showMenuAndGetChoice() throws InvalidOptionException {
        System.out.println("MENU: ");
        System.out.println("1.Add Book:");
        System.out.println("2.Remove Book:");
        System.out.println("3.Reserve Book:");
        System.out.println("4.Display Books:");
        System.out.println("5.Exit:");
        System.out.print("Choose an option 1-5: ");

        if (!SC.hasNextInt()) {
            SC.nextLine();
            throw new InvalidOptionException("Choice must be a number between 1 and 5.");
        }
        int choice = SC.nextInt();
        SC.nextLine();
        if (choice < 1 || choice > 5) {
            throw new InvalidOptionException("Choice must be between 1 and 5.");
        }
        return choice;
    }

    private static void addBook() {
        System.out.println("\n-- Add a Book --");

        System.out.print("Enter Book ID (e.g., C3): ");
        String id = nonEmptyLine();
        if (findById(id).isPresent()) {
            System.out.println("[Error] A book with this ID already exists.");
            return;
        }

        System.out.print("Enter Title: ");
        String title = nonEmptyLine();

        System.out.print("Enter Author: ");
        String author = nonEmptyLine();

        Integer price = askPrice();
        if (price == null) {
            System.out.println("[Error] Price must be a positive integer.");
            return;
        }

        BOOKS.put(id, new Book(id, title, author, price));
        System.out.println("Book added successfully!");
    }

    private static void removeBook() throws InvalidOptionException {
        System.out.println("\n-- Remove a Book --");
        System.out.println("1. By Title");
        System.out.println("2. By ID");
        System.out.print("Choose an option (1-2): ");

        if (!SC.hasNextInt()) {
            SC.nextLine();
            throw new InvalidOptionException("Removal choice must be 1 or 2.");
        }
        int opt = SC.nextInt();
        SC.nextLine();

        switch (opt) {
            case 1 -> {
                System.out.print("Enter Title to remove: ");
                String title = nonEmptyLine();
                boolean removedAny = removeIf(b -> b.title.equalsIgnoreCase(title));
                if (removedAny) System.out.println("Removed book(s) with title: " + title);
                else System.out.println("No book found with title: " + title);
            }
            case 2 -> {
                System.out.print("Enter ID to remove: ");
                String id = nonEmptyLine();
                Book removed = BOOKS.remove(id.toUpperCase()); // optional normalization
                if (removed == null) removed = BOOKS.remove(id); // fallback if not normalized
                if (removed != null) System.out.println("Removed book with id: " + id);
                else System.out.println("No book found with id: " + id);
            }
            default -> throw new InvalidOptionException("Invalid removal option: " + opt);
        }
    }

    private static void reserveBook() throws InvalidOptionException {
        System.out.println("\n-- Reserve a Book --");
        System.out.println("1. By Title");
        System.out.println("2. By ID");
        System.out.print("Choose an option (1-2): ");

        if (!SC.hasNextInt()) {
            SC.nextLine();
            throw new InvalidOptionException("Reservation choice must be 1 or 2.");
        }
        int opt = SC.nextInt();
        SC.nextLine();

        Optional<Book> match;
        switch (opt) {
            case 1 -> {
                System.out.print("Enter Title to reserve: ");
                String title = nonEmptyLine();
                match = findFirstByTitle(title);
            }
            case 2 -> {
                System.out.print("Enter ID to reserve: ");
                String id = nonEmptyLine();
                match = findById(id);
            }
            default -> throw new InvalidOptionException("Invalid reservation option: " + opt);
        }

        if (match.isEmpty()) {
            System.out.println("No matching book found.");
            return;
        }

        Book b = match.get();
        if (b.isReserved()) {
            System.out.println("This book is already reserved by: " + b.reservedBy);
            return;
        }

        System.out.print("Enter your name to reserve: ");
        String name = nonEmptyLine();
        b.reservedBy = name;
        System.out.println("Book reserved successfully!");
    }

    private static void displayBooks() {
        System.out.println("\n-- Current Books --");
        if (BOOKS.isEmpty()) {
            System.out.println("(no books)");
            return;
        }
        for (Book b : BOOKS.values()) {
            System.out.println(b);
        }
    }

    private static boolean removeIf(java.util.function.Predicate<Book> predicate) {
        boolean removed = false;
        for (Iterator<Map.Entry<String, Book>> it = BOOKS.entrySet().iterator(); it.hasNext(); ) {
            Map.Entry<String, Book> entry = it.next();
            Book b = entry.getValue();
            if (predicate.test(b)) {
                it.remove();
                removed = true;
            }
        }
        return removed;
    }

    private static Optional<Book> findById(String id) {
        // Case-insensitive lookup: try exact, then try with normalized key
        Book byExact = BOOKS.get(id);
        if (byExact != null) return Optional.of(byExact);

        // If you want strict case-insensitive keys, you can normalize on insertion instead.
        for (Map.Entry<String, Book> e : BOOKS.entrySet()) {
            if (e.getKey().equalsIgnoreCase(id)) {
                return Optional.of(e.getValue());
            }
        }
        return Optional.empty();
    }

    private static Optional<Book> findFirstByTitle(String title) {
        for (Book b : BOOKS.values()) {
            if (b.title.equalsIgnoreCase(title)) return Optional.of(b);
        }
        return Optional.empty();
    }

    private static Integer askPrice() {
        System.out.print("Enter Price (integer): ");
        if (!SC.hasNextInt()) {
            SC.nextLine();
            return null;
        }
        int p = SC.nextInt();
        SC.nextLine();
        return p > 0 ? p : null;
    }

    private static String nonEmptyLine() {
        String s = SC.nextLine().trim();
        while (s.isEmpty()) {
            System.out.print("Value cannot be empty. Please re-enter: ");
            s = SC.nextLine().trim();
        }
        return s;
    }
}