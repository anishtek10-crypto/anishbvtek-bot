package day7;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class libraryTest {

	@Test
	void TestReserveIfTitlenull() {
		library library=new library();
		assertThrows(IllegalArgumentException.class,()-> {
			library.reserve(null);
			
		});	
	}
	@Test
    void testReserveWhenBookTitleIsBlank() {
        library library = new library();
        assertThrows(IllegalArgumentException.class, () -> {
            library.reserve(""); 
        });
    }
	@Test
    void testReserveWhenBookTitleContainsonlyWhiteSpaces() {
        library library = new library();
        assertThrows(IllegalArgumentException.class, () -> {
            library.reserve("  "); 
        });
    }
	
}
