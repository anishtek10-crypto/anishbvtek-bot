package banking.model;

import banking.exception.BankingException;

public class Account {
	private int accountNumber;
	private String holderName;
	private double balance;
	public Account(int accountNumber, String holderName, double balance) {
		this.accountNumber=accountNumber;
		this.holderName=holderName;
		this.balance = balance;
	}
	public int getAccountNumber() { 
		return accountNumber;
	}
	public String getHolderName() { 
		return holderName;
	}
	public double getBalance() {
		return balance;
	}
	public void deposit (double amount) {
		if(amount<=0)
			throw new BankingException("deposit must be +ve ");
		balance+=amount;
	}
	public void withdraw(double amount) {
		if(amount<=0)
			throw new BankingException("withdraw must be +ve ");
		if(amount>balance)
			throw new BankingException("insufficient balance");
		balance-=amount;
		
	}

}
