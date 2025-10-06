package hijos;

import java.io.IOException;
import java.util.Random;

public class GenerarNumerosAleatorios {
	private static final Random RANDOM = new Random();
	private static final int MIN = 1;
	private static final int MAX = 100;
	
	public static void main(String[] args) throws IOException, InterruptedException {
		
		for (int i = 0; i < 10; i ++) {
			System.out.println(RANDOM.nextInt((MAX - MIN) / 2 + 1) * 2 + MIN);
		}
	}

}
