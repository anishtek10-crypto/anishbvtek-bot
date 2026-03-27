package loganalyzer;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
public class LogAnalyzer {
    public static void main(String[] args) {
        String filePath = "app.log";
        int infoCount = 0;
        int warnCount = 0;
        int errorCount = 0;
        int otherCount = 0;
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = br.readLine()) != null) {
            	String upperLine = line.toUpperCase();
                if (line.contains("INFO")) {
                    infoCount++;
                } else if (line.contains("WARN") || line.contains("WARNING")) {
                    warnCount++;
                } else if (line.contains("ERROR")) {
                    errorCount++;
                } else {
                    otherCount++;
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("LOG SUMMARY :");
        System.out.println("INFO: " + infoCount);
        System.out.println("WARN: " + warnCount);
        System.out.println("ERROR: " + errorCount);
        System.out.println("OTHER: " + otherCount);
    }
}


