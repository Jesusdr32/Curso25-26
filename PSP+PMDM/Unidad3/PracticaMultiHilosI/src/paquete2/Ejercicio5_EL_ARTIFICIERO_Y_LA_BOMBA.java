package paquete2;

public class Ejercicio5_EL_ARTIFICIERO_Y_LA_BOMBA implements Runnable {
	
	private boolean objeto;
	
	public static final int MIN = 9500;
	public static final int MAX = 10500;
	
	public Ejercicio5_EL_ARTIFICIERO_Y_LA_BOMBA(boolean bomba) {
		super();
		this.objeto = bomba;
	}
	
	public void bomba() {
			
		try {
			for (int i = 9; i >= 0; i --) {
				System.out.println(i);
				Thread.sleep(1000);
			}
			System.out.println("PUUUUUUMMMMMMMM");
		} catch (InterruptedException e) {
			System.out.println("La bomba ha sido desactivada");
			return;
		}
	}
	
	public void artificiero() {
		int desactivacion = (int) (Math.random() * (MAX - MIN + 1)) + MIN;
		System.out.println(desactivacion);
		try {
			System.out.println("El artificiero comienza a desactivar la bomba");
			Thread.sleep(desactivacion);
			System.out.println("El artificiero ha desactivado la bomba");
		} catch (InterruptedException e) {
			System.out.println("El artificiero ha muerto");
			return;
		}
	}
	
	@Override
	public void run() {
		if (objeto) {
			this.bomba();
		} else {
			this.artificiero();
		}
	}
	
	public static void main(String[] args) throws InterruptedException {
		Thread bomba = new Thread (new Ejercicio5_EL_ARTIFICIERO_Y_LA_BOMBA(true));
		Thread artificiero = new Thread (new Ejercicio5_EL_ARTIFICIERO_Y_LA_BOMBA(false));
		
		bomba.start();
		artificiero.start();
		
		while (bomba.isAlive() && artificiero.isAlive()) {
			Thread.sleep(10);
		}
		
		if (!bomba.isAlive()) {
			artificiero.interrupt();
		} else {
			bomba.interrupt();
		}
		
	}

}
