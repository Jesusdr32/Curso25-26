package paquete2;

import java.util.Scanner;

public class Calculadora {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		String argumento = "";
		int acum = 0;
		
		try {
			do {
				argumento = sc.nextLine();
				System.out.println("Escritorio " + argumento);
				if (!argumento.contains("*")) {
					acum += Integer.parseInt(argumento);
				}
			} while (!argumento.contains("*"));
			System.out.println("Total: " + acum);
			System.exit(0);
		} catch (NumberFormatException e) {
			System.out.println("Error: línea no numérica -> " + argumento);
			System.exit(-1);
		}
		sc.close();
	}

}
