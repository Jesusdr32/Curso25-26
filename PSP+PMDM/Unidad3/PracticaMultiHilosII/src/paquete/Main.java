package paquete;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Main {

	public static void main(String[] args) {
		Arbitro arbitro = new Arbitro(3);
		
		Jugador jugador1 = new Jugador(1, arbitro);
		Jugador jugador2 = new Jugador(2, arbitro);
		Jugador jugador3 = new Jugador(3, arbitro);
		
		System.out.println("Número a adivinar: " + arbitro.getNumAdivinar() + "\n\n");
		
		ExecutorService executor = Executors.newFixedThreadPool(3);
		
		executor.submit(jugador1);
		executor.submit(jugador2);
		executor.submit(jugador3);
		
		executor.shutdown();
	}

}
