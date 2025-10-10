package paquete;

public class Hilo implements Runnable {
	
	private Contador contador;
	
	public Hilo(Contador contador) {
		super();
		this.contador = contador;
	}
	
	@Override
	public void run() {
		for (int i = 0; i < 1000; i ++) {
			contador.suma();
		}
	}

}
