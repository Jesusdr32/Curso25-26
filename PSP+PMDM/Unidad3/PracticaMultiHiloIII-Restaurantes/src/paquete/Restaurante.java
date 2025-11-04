package paquete;

import java.util.ArrayList;
import java.util.List;

public class Restaurante {
	private List<String> armario = new ArrayList<>();
	private final int CAPACIDAD = 5;
	private int cocinerosTerminados = 0;
	private final int TOTAL_COCINEROS = 2;
	
	public synchronized void poner(String tipo) throws InterruptedException {
		while (armario.size() == CAPACIDAD) {
			wait();
		}
		armario.add(tipo);
		System.out.println("Cocinero pone " + tipo + " (armario = " + armario.size() + ")");
		notifyAll();
	}
	
	public synchronized String tomar() throws InterruptedException {
		while (armario.isEmpty()) {
			if (cocinerosTerminados == TOTAL_COCINEROS) {
				return null;
			}
			wait();
		}
		
		String producto = null;
		for (String p : armario) {
			if (p.equals("hamburguesa")) {
				producto = p;
				break;
			}
		}
		if (producto == null) {
			producto = armario.get(0);
		}
		
		armario.remove(producto);
		System.out.println("Repartidor recoge " + producto + " (armario = " + armario.size() + ")");
		notifyAll();
		return producto;
	}
	
	public synchronized void cocineroTermina() {
		cocinerosTerminados ++;
		System.out.println("Cocinero ha terminado (" + cocinerosTerminados + "/" + TOTAL_COCINEROS + ")");
		notifyAll();
	}
}
