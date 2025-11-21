package paquete;

import java.io.IOException;
import java.util.Scanner;

public class EjecutarComandosSistema {

	public static void main(String[] args) throws IOException, InterruptedException {
		Scanner sc = new Scanner(System.in);
		
		ProcessBuilder pb;
		
		System.out.println("¿Qué opción quiere realizar? (Apagar = 1, Reiniciar = 2, Suspender = 3)");
		
		int respuesta = Integer.parseInt(sc.nextLine());
		
		switch (respuesta) {
		case 1:
			pb = new ProcessBuilder("shutdown", "-s");
			break;
		case 2:
			pb = new ProcessBuilder("shutdown", "-r");
			break;
		case 3:
			pb = new ProcessBuilder("shutdown", "-h");
			break;
		default:
			System.out.println("La opción dada no está asignada, fallo del programa");
			pb = null;
			break;
		}
		
		pb.start();
		sc.close();
	}

}
