package paquete;

public class Contador {
	
	private int contador;
	
	public Contador() {
		super();
		this.contador = 0;
	}
	
//	public void suma() {
//		contador ++;
//	}
	
	public synchronized void suma() {
		contador ++;
	}

	public int getContador() {
		return contador;
	}

	@Override
	public String toString() {
		return  " " + contador;
	}
	
}
