package paquete;

public class Ejercicio2_IRONMAN implements Runnable {
	
	public static final int DISTANCIA_CORRER = 42;
	public static final int DISTANCIA_BICI = 180;
	public static final int DISTANCIA_NADO = 4000;
	
	private int vCorrer;
	private int vBici;
	private int vNado;
	private String nombre;
	
	public Ejercicio2_IRONMAN (String nombre, int vCorrer, int vBici, int vNado) {
		super();
		this.nombre = nombre;
		this.vCorrer = vCorrer;
		this.vBici = vBici;
		this.vNado = vNado;
	}
	
	public void carrera() {
		try {
			System.out.println(nombre + "ha comenzado la prueba en bici");
			Thread.sleep((DISTANCIA_CORRER / vCorrer) * 1000);
			System.out.println(nombre + " ha terminado la prueba en bici");
			System.out.println(nombre + " ha comenzado la prueba corriendo");
			Thread.sleep((DISTANCIA_BICI / vBici) * 1000);
			System.out.println(nombre + " ha terminado la prueba corriendo");
			System.out.println(nombre + " ha comenzado la prueba a nado");
			Thread.sleep((DISTANCIA_NADO / vNado) * 1000);
			System.out.println(nombre + " ha terminado la prueba a nado");
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	@Override
	public void run() {
		this.carrera();
	}
	public static void main(String[] args) {
		Ejercicio2_IRONMAN p1 = new Ejercicio2_IRONMAN("Pedro", 6, 20, 1000);
		Ejercicio2_IRONMAN p2 = new Ejercicio2_IRONMAN("Juan", 7, 18, 2000);
		Ejercicio2_IRONMAN p3 = new Ejercicio2_IRONMAN("Vicente", 6, 30, 1000);
		
		new Thread(p1).start();
		new Thread(p2).start();
		new Thread(p3).start();
	}

}
