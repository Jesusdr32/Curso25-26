package paquete;

import java.util.Random;

public class Repartidor implements Runnable {
	private Restaurante restaurante;
	private int hamburguesasEntregadas = 0;
	private int pizzasEntregadas = 0;
	private final Random random = new Random();
	
	public Repartidor(Restaurante restaurante) {
		this.restaurante = restaurante;
	}
	
	@Override
	public void run() {
		try {
			while (true) {
				String producto = restaurante.tomar();
				if (producto == null) {
					break;
				}
				int tiempo = 300 + random.nextInt(301);
				Thread.sleep(tiempo);
				
				if (producto.equals("hamburguesa")) hamburguesasEntregadas ++;
				else pizzasEntregadas ++;
				
				System.out.println("Repartidor entrega " + producto + "(hamburguesas = " + hamburguesasEntregadas + ", pizzas = " + pizzasEntregadas);
			}
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public int getHamburguesasEntregadas() {
		return hamburguesasEntregadas;
	}

	public int getPizzasEntregadas() {
		return pizzasEntregadas;
	}
	
}
