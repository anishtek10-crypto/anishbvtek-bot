package day7;

public class MyThread extends Thread  {
	@Override
	public void run() {
		try {
			sleep(2000);
		} catch (InterruptedException e) {
			// TODO: handle exception
		}
		System.out.println("thread is running");
	}

}
