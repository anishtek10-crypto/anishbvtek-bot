package day5;
interface Add{
	int sum(int a , int b);
}
public class Lambda {
	public static void main(String[] args) {
		Add add = (a,b)->a+b;
		System.out.println(add.sum(4, 6));
	}

}
