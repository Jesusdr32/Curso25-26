package paquete;

public class Isla {
	private final int capacidadPlaya;
	private int balsasEnPlaya = 0;
	private boolean balsa1Esperando = false;
	private int naufragosRestantes;
	
	public Isla(int capacidadPlaya, int naufragosTotales) {
		this.capacidadPlaya = capacidadPlaya;
		this.naufragosRestantes = naufragosTotales;
	}
	
	//Entrada a la playa, con prioridad para la balsa 1
	public synchronized void entrarPlaya(int idBalsa) throws InterruptedException {
		if (idBalsa == 1) {
			balsa1Esperando = true;
			while (balsasEnPlaya >= capacidadPlaya) {
				wait();
			}
			balsa1Esperando = false;
			balsasEnPlaya ++;
		} else {
			while (balsasEnPlaya >= capacidadPlaya || balsa1Esperando) {
				wait();
			}
			balsasEnPlaya ++;
		}
	}
	
	//Salida de la playa
	public synchronized void salirPlaya(int idBalsa) {
		balsasEnPlaya = Math.max(0, balsasEnPlaya - 1);
		notifyAll();
	}
	
	//Asignar de forma segura los náufragos que se suben a esta balsa
	public synchronized int asignarNaufragos(int maximo) {
		int tomar = Math.min(maximo, naufragosRestantes);
		if (tomar > 0) {
			naufragosRestantes -= tomar;
		}
		return tomar;
	}
	
	//Consultar los náufragos que quedan 
	public synchronized int getNaufragosRestantes() {
		return naufragosRestantes;
	}
}
