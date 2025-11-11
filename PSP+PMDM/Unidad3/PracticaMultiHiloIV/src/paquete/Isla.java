package paquete;

import java.util.concurrent.Semaphore;

public class Isla {
	private int naufragosRestantes;
	private final Semaphore playa;
	
	public Isla(int totalNaufragos) {
		this.naufragosRestantes = totalNaufragos;
		this.playa = new Semaphore(2, true);
	}
	
	public synchronized int rescatarNaufragos(int cantidad) {
		if (naufragosRestantes <= 0) return 0;
		int rescate = Math.min(cantidad, naufragosRestantes);
		naufragosRestantes -= rescate;
		return rescate;
	}
	
	public synchronized int getNaufragosRestantes() {
		return naufragosRestantes;
	}
	
	public Semaphore getPlaya() {
		return playa;
	}
}
