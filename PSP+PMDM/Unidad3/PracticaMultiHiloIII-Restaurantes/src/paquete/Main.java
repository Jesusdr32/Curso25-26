package paquete;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Main {

	public static void main(String[] args) throws InterruptedException {
		Restaurante restaurante = new Restaurante();
		
		Cocinero cocineroH = new Cocinero("hamburguesa", restaurante);
		Cocinero cocineroP = new Cocinero("pizza", restaurante);
		
		Repartidor[] repartidores = new Repartidor[4];
		for (int i = 0; i < 4; i ++) {
			repartidores[i] = new Repartidor(restaurante);
		}
		
		ExecutorService executor = Executors.newFixedThreadPool(6);
		
		executor.submit(cocineroH);
		executor.submit(cocineroP);
		for (Repartidor repartidor : repartidores) {
			executor.submit(repartidor);
		}
		
		executor.shutdown();
		
		System.out.println("\n=== RESULTADO FINAL ===");
        for (int i = 0; i < repartidores.length; i++) {
            System.out.println("Repartidor " + (i + 1) +
                    ": Hamburguesas=" + repartidores[i].getHamburguesasEntregadas() +
                    ", Pizzas=" + repartidores[i].getPizzasEntregadas());
        }
	}

}
