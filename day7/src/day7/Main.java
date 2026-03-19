package day7;

public class Main {
	public static void main(String[] args) throws InterruptedException {
		Thread t1 = new MyThread();
		//Thread task = new Thread(new MyTask());
		t1.start();
		t1.join();
		System.out.println("main");
	}

}
