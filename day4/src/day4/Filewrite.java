package day4;
import java.io.FileWriter;
import java.io.IOException;
public class Filewrite {
	public static void main(String[] args) throws IOException {
		FileWriter writer = new FileWriter("output.txt");
		writer.write("hello java");
		writer.close();
		
	}

}
