package day7;

public class BookNotAvailableException extends RuntimeException {
    public BookNotAvailableException(String msg) {
        super(msg);
    }
}