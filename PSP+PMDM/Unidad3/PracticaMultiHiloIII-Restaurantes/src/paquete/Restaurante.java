package paquete;

import java.util.ArrayList;
import java.util.List;

public class Restaurante {
	private ArrayList<String> armario = new ArrayList<>();
	private final int CAPACIDAD = 5;
	private int cocinerosTerminados = 0;
	private final int TOTAL_COCINEROS = 2;
	
	public synchronized void poner(String tipo) throws InterruptedException {
		while (armario.size() == CAPACIDAD) {
			wait();
		}
		armario.add(tipo);
		System.out.println("\nCocinero pone " + tipo + " (" + mostrarArmario() + ")\n");
		notifyAll();
	}
	
	public String mostrarArmario() {
		String horno = "";
		int i = 0;
		for (String producto : armario) {
			switch (producto) {
			case "hamburguesa" -> horno += " Hamburguesa ";
			case "pizza" -> horno += " Pizza ";
			default -> horno += " Vacío ";
			}
			i ++;
		}
		
		while (i < CAPACIDAD) {
			horno += " Vacío";
			i ++;
		}
		return horno;
	}
	
	public synchronized String tomar(Repartidor repartidor) throws InterruptedException {
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
		System.out.println("Repartidor " + repartidor.getNombre() + " recoge " + producto + " (" + mostrarArmario() + ")");
		notifyAll();
		return producto;
	}
	
	public synchronized void cocineroTermina() {
		cocinerosTerminados ++;
		System.out.println("Cocinero ha terminado (" + cocinerosTerminados + "/" + TOTAL_COCINEROS + ")");
		notifyAll();
	}
}
