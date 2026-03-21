package day7;
import static org.junit.jupiter.api.Assertions.*;
import java.util.List;
import org.junit.jupiter.api.Test;
class libraryTest {
	@Test
	void testReserveWhenBookTitleIsNull() {
	    library lib = new library();
	    assertThrows(IllegalArgumentException.class, () -> lib.reserve(null));
	}
	@Test
	void testReserveWhenBookTitleIsBlank() {
	    library lib = new library();
	    assertThrows(IllegalArgumentException.class, () -> lib.reserve(""));
	}
	@Test
	void testReserveWhenBookTitleContainsOnlyWhiteSpaces() {
	    library lib = new library();
	    assertThrows(IllegalArgumentException.class, () -> lib.reserve("   "));
	}
	@Test
	void testReserveSuccess() {
	    library lib = new library();
	    lib.add("1", "Java", 500, "James");
	    lib.reserve("Java");
	    List<Book> books = lib.find("Java");
	    assertEquals(BookStatus.BOOKED, books.get(0).getStatus());
	}
	@Test
	void testReserveBookNotFound() {
	    library lib = new library();
	    assertThrows(BookNotAvailableException.class, () -> {
	        lib.reserve("Python");
	    });
	}
	@Test
	void testReserveAlreadyBooked() {
	    library lib = new library();
	    lib.add("1", "Java", 500, "James");
	    lib.reserve("Java");
	    assertThrows(BookNotAvailableException.class, () -> {
	        lib.reserve("Java");
	    });
	}
	}