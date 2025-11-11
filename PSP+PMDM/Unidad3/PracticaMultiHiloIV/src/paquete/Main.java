package paquete;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.TimeUnit;

public class Main {

	public static void main(String[] args) {
		int totalNaufragos = ThreadLocalRandom.current().nextInt(800, 1001);
		Isla isla = new Isla(totalNaufragos);
		
		System.out.println("Comienza el rescate con " + totalNaufragos + " náufragos.\n");
		
		int numBalsas = 5;
		ExecutorService executor = Executors.newFixedThreadPool(numBalsas);
		
		long inicio = System.currentTimeMillis();
		
		for (int i = 1; i <= numBalsas; i ++) {
			executor.submit(new Balsa(i, isla));
		}
		
		executor.shutdown();
		
		try {
			executor.awaitTermination(10, TimeUnit.MINUTES);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		long fin = System.currentTimeMillis();
		double tiempoTotal = (fin - inicio) / 1000.0;
		
		System.out.println("\n Rescate completado en " + tiempoTotal + " segundos");
	}

}
