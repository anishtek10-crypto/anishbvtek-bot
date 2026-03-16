package day5;
@FunctionalInterface
interface Animal{
	void eat();
}
class cat implements Animal{
	@Override
	public void eat() {
		System.out.println("animal eat ");
	}
}
public class Functioninterfaceexample {
	public static void main(String[] args) {
		oopWay();
	}
	private static void oopWay() {
		Animal animal = new cat();
		animal.eat();
	}
    private static void functionaL() {
		Animal animal = ()->{
			System.out.println("animal eat in lambda");
		};
		animal.eat();
	}

}
