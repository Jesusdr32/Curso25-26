package paquete;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.TimeUnit;

public class Main {

	public static void main(String[] args) {
		int totalNaufragos = ThreadLocalRandom.current().nextInt(800, 1000 + 1);
        System.out.println("Náufragos totales a rescatar: " + totalNaufragos);

        Isla isla = new Isla(2, totalNaufragos);
        ExecutorService executor = Executors.newFixedThreadPool(5);

        long inicio = System.nanoTime();

        Future<Integer>[] resultados = new Future[5];
        for (int i = 0; i < 5; i++) {
            resultados[i] = executor.submit(new Balsa(i + 1, isla));
        }

        executor.shutdown();
        executor.awaitTermination(30, TimeUnit.MINUTES);

        long fin = System.nanoTime();
        double duracion = (fin - inicio) / 1_000_000_000.0;

        int totalRescatados = 0;
        for (int i = 0; i < 5; i++) {
            int rescatados = resultados[i].get();
            totalRescatados += rescatados;
            System.out.printf("Balsa %d rescató: %d náufragos%n", i + 1, rescatados);
        }

        System.out.println("--------------------------------");
        System.out.printf("Total rescatado: %d (de %d)%n", totalRescatados, totalNaufragos);
        System.out.printf("Tiempo total: %.3f segundos%n", duracion);
	}

}
