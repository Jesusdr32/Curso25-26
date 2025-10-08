package paquete2;

public class Ejercicio3_RELEVOS extends Thread {
	
	public final static int MIN = 950;
	public final static int MAX = 1050;
	public final static int DISTANCIA = 100;
	
	private String nombre;
	private String equipo;
	private double vCorrer;
	
	public Ejercicio3_RELEVOS (String nombre, String equipo) {
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
		Ejercicio3_RELEVOS p1 = new Ejercicio3_RELEVOS("Pepe", "España");
		Ejercicio3_RELEVOS p2 = new Ejercicio3_RELEVOS("Maria", "España");
		Ejercicio3_RELEVOS p3 = new Ejercicio3_RELEVOS("Juan", "España");
		Ejercicio3_RELEVOS p4 = new Ejercicio3_RELEVOS("Marta", "España");
		
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
		
		System.out.println("FINAL DE PROGRAMA");
		
	}

}
