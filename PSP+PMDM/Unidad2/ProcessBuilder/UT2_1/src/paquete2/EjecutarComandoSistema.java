package paquete2;

import java.io.IOException;
import java.util.Scanner;

public class EjecutarComandoSistema {

	public static void main(String[] args) throws IOException, InterruptedException{
		Scanner sc = new Scanner(System.in);
		
		ProcessBuilder pb;
		
		System.out.println("¿Que opcion quieres realizar? (Apagar = 1, Reiniciar = 2, Suspender = 3)");
		
		int respuesta = Integer.parseInt(sc.nextLine());
		
		if (respuesta == 1) {
			pb = new ProcessBuilder("shutdown", "-s");
		} else if (respuesta == 2) {
			pb = new ProcessBuilder("shutdown", "-r");
		} else if (respuesta == 3) {
			pb = new ProcessBuilder("shutdown", "-h");
		} else {
			System.out.println("la opción dada no está asignada, fallo del sistema");
			pb = null;
		}
		pb.start();
		sc.close();
	}

}
