package paquete;

import java.util.Random;

public class CadenaMontaje {
	private final int[] cinta;
	private final int maxColocaciones;
	private int colocados = 0;
	private final int[] empaquetados = new int[4];
	private boolean productorTerminado = false;
	private final Random rand = new Random();
	
	public CadenaMontaje(int capacidad, int maxColocaciones) {
		this.cinta = new int[capacidad];
		this.maxColocaciones = maxColocaciones;
	}
	
	public synchronized boolean colocarProducto() throws InterruptedException {
		if (colocados >= maxColocaciones) {
			productorTerminado = true;
			notifyAll();
			
			return false;
		}
		
		while (!hayEspacio()) {
			wait();
		}
		
		int tipo = rand.nextInt(3) + 1;
		for (int i = 0; i < cinta.length; i ++) {
			if (cinta[i] == 0) {
				cinta[i] = tipo;
				colocados ++;
				System.out.println("Producto tipo " + tipo);
				System.out.println("Coloco un producto " + tipo + " en la posición " + i);
				System.out.println(estadoCinta());
				break;
			}
		}
		notifyAll();
		
		if (colocados >= maxColocaciones) {
			productorTerminado = true;
			notifyAll();
		}
		
		return true;
	}
	
	public synchronized boolean recogerProducto(int tipo) throws InterruptedException {
		while (!existeTipo(tipo) && !productorTerminado) {
			wait();
		}
		
		if (!existeTipo(tipo) && productorTerminado) {
			return false;
		}
		
		for (int i = 0; i < cinta.length; i ++) {
			if (cinta[i] == tipo) {
				cinta[i] = 0;
				empaquetados[tipo] ++;
				System.out.println("Recogiendo producto " + tipo + " (posición " + i + ")");
				System.out.println(estadoCinta());
				notifyAll();
				return true;
			}
		}
		
		return true;
	}
	
	private boolean hayEspacio() {
		for (int x : cinta) 
			if (x == 0) return true;
		return false;
	}
	
	private boolean existeTipo(int tipo) {
		for (int x : cinta) 
			if (x == tipo) return true;
		return false;
	}
	
	public synchronized boolean isProductorTerminado() {
		return productorTerminado;
	}
	
	public synchronized int getTotalColocados() {
		return colocados;
	}
	
	public synchronized int[] getEmpaquetados() {
		return new int[] {empaquetados[1], empaquetados[2], empaquetados[3]};
	}
	
	public synchronized String estadoCinta() {
		StringBuilder sb = new StringBuilder("[");
		for (int i = 0; i < cinta.length; i ++) {
			if (i > 0) sb.append(", ");
			sb.append(cinta[i] == 0 ? "e" : cinta[i]);
		}
	}
}
