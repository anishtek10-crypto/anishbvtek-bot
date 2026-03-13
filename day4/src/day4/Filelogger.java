package day4;
import java.util.logging.Logger;
public class Filelogger {
	private static final Logger logger = Logger.getLogger(Filelogger.class.getName());
	public static void main(String[] args) {
		try(BufferedReader reader = new BufferedReader(new FileReader("data.txt"))){
			String line;
			while(((line == reader.readLine())=null)) {
				logger.info(line);
			}
		}catch (Exception e ) {
			
		}
	}

}
