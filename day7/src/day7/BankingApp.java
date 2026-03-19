package day7;
import java.util.Scanner;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class BankingApp {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("enter initial balance:");
		int initialBalance = sc.nextInt();
		BankAccount account = new BankAccount(initialBalance);
		ExecutorService executor = Executors.newFixedThreadPool(3);
		while(true) {
			System.out.println("\nMy Banking System:");
			System.out.println("1.check balance:");
			System.out.println("2.deposit:");
			System.out.println("3.withdraw:");
			System.out.println("4.parallel withdraw:");
			System.out.println("5.exit:");
			System.out.println("enter ur choice:");
			int choice = sc.nextInt();
			switch(choice) {
			case 1: System.out.println("current balance"+ account.getBalance());
			break;
			case 2: System.out.println("amount to deposit: ");
			int dep = sc.nextInt();
			executor.execute(new DepositTask(account,dep));
			break;
			case 3: System.out.println("amount to withdraw:");
			int wd = sc.nextInt();
			executor.execute(new WithdrawTask(account,wd));
			break;
			case 4: System.out.println("two parallel withdrawals of maoney"+(initialBalance/2));
			executor.execute(new WithdrawTask(account,initialBalance/2));
			executor.execute(new WithdrawTask(account,initialBalance/2));
			break;
			case 5: System.out.println("bank shutdown");
			executor.shutdown();
			sc.close();
			System.exit(0);
			break;
			default : System.out.println("wrong choice");
			
			}
			
		}
	}
}

    