package day7;

class WithdrawTask implements Runnable {
    private final BankAccount account;
    private final int amount;
    public WithdrawTask(BankAccount account, int amount) {
        this.account=account;
        this.amount=amount;
    }
    public void run() {
    	String thread = Thread.currentThread().getName();
    	System.out.println(thread + "attempt to withdraw"+amount);
    	boolean success = account.withdraw(amount);
    	if(success) {
    		System.out.println(thread+"successful withdraw"+amount);
    	}
    	else {
    		System.out.println(thread+"fail to withdraw"+amount);
    	}
    }
}


