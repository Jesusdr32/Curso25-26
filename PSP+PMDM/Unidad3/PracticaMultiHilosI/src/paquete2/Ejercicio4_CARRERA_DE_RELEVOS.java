package paquete2;

public class Ejercicio4_CARRERA_DE_RELEVOS extends Thread {
	
	public final static int MIN = 950;
	public final static int MAX = 1050;
	public final static int DISTANCIA = 100;
	
	private String nombre;
	private String equipo;
	private double vCorrer;
	
	public Ejercicio4_CARRERA_DE_RELEVOS (String nombre, String equipo) {
		super();
		this.nombre = nombre;
		this.equipo = equipo;
		this.vCorrer = (Math.random() * (MIN - MAX + 1) + MAX);
	}
	
	public void carrera() {
		try {
			System.out.println(equipo + ": " + nombre + " comienza su relevo");
			Thread.sleep((long) (10 * vCorrer));
			double tiempo = Math.round((vCorrer / 100) * 100.0) / 100.0;
			System.out.println(equipo + ": " + nombre + " ha acabado su relevo - Ha tardado: " + tiempo + " segundos");
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	@Override
	public void run() {
		this.carrera();
	}
	
	public static void main(String[] args) {
		
		Ejercicio4_CARRERA_DE_RELEVOS p1 = new Ejercicio4_CARRERA_DE_RELEVOS("Pepe", "España");
		Ejercicio4_CARRERA_DE_RELEVOS p2 = new Ejercicio4_CARRERA_DE_RELEVOS("Maria", "España");
		Ejercicio4_CARRERA_DE_RELEVOS p3 = new Ejercicio4_CARRERA_DE_RELEVOS("Juan", "España");
		Ejercicio4_CARRERA_DE_RELEVOS p4 = new Ejercicio4_CARRERA_DE_RELEVOS("Marta", "España");
		Ejercicio4_CARRERA_DE_RELEVOS p5 = new Ejercicio4_CARRERA_DE_RELEVOS("John", "EEUU");
		Ejercicio4_CARRERA_DE_RELEVOS p6 = new Ejercicio4_CARRERA_DE_RELEVOS("Kim", "EEUU");
		Ejercicio4_CARRERA_DE_RELEVOS p7 = new Ejercicio4_CARRERA_DE_RELEVOS("Mike", "EEUU");
		Ejercicio4_CARRERA_DE_RELEVOS p8 = new Ejercicio4_CARRERA_DE_RELEVOS("Sarah", "EEUU");
		
		Thread españa = new Thread(() -> {
			try {
				p1.start();
				p1.join();
				
				p2.start();
				p2.join();
			
				p3.start();
				p3.join();
				
				p4.start();
				p4.join();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		});
		
		españa.start();
		
		Thread eeuu = new Thread(() -> {
			try {
				p5.start();
				p5.join();
				
				p6.start();
				p6.join();
			
				p7.start();
				p7.join();
				
				p8.start();
				p8.join();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		});
		
		eeuu.start();
		
		try {
			españa.join();
			eeuu.join();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		System.out.println("FINAL DE PROGRAMA");
		
	}

}
