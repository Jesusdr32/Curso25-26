package hijos;

import java.util.Arrays;
import java.util.Scanner;

public class OrdenarNumerosAleatorios {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int[] numeros = new int[10];
		for (int i = 0; i < 10; i ++) {
			if (sc.hasNextInt()) {
				numeros[i] = Integer.parseInt(sc.nextLine());
			} else {
				System.err.println("Se esperaban 10 números enteros");
				sc.close();
			}
		}
		Arrays.sort(numeros);
		for (int numero : numeros) {
			System.out.println(numero);
		}
		sc.close();
	}
	
}
