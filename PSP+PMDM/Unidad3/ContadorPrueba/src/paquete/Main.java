package paquete;

public class Main {
	
	public static void main(String[] args) {
		
		Contador contador = new Contador();
		
		Thread h1 = new Thread(new Hilo(contador));
		Thread h2 = new Thread(new Hilo(contador));
		Thread h3 = new Thread(new Hilo(contador));
		Thread h4 = new Thread(new Hilo(contador));
		Thread h5 = new Thread(new Hilo(contador));
		
		h1.start();
		h2.start();
		h3.start();
		h4.start();
		h5.start();
		
		do {
			
		} while (h1.isAlive() || h2.isAlive() || h3.isAlive() || h4.isAlive() || h5.isAlive());
		
		System.out.println(contador);
	}

}
