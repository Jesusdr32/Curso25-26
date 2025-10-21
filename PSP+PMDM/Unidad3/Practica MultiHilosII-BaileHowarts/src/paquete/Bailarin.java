package paquete;

public class Bailarin implements Runnable{
	private String nombre;
	private String genero;
	private String casa;
	
	public Bailarin(String nombre, String genero, String casa) {
		super();
		this.nombre = nombre;
		this.genero = genero;
		this.casa = casa;
	}

	public String getNombre() {
		return nombre;
	}

	public String getGenero() {
		return genero;
	}

	public String getCasa() {
		return casa;
	}
	
	@Override
	public void run() {
		System.out.println(nombre + "está bailando ...");
		try {
			Thread.sleep((int) (Math.random() * 3000) + 1000);
		} catch(InterruptedException e) {
			Thread.currentThread().interrupt();
		}
		System.out.println(nombre + " termina su baile");
	}

	@Override
	public String toString() {
		return nombre + " (" + casa + ")";
	}
	
	
}
