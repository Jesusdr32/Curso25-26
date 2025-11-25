package ejercicio2;

import java.net.ServerSocket;
import java.net.Socket;

public class Ejercicio2_Servidor {
	
	public static void main(String[] args) {
		int puerto = 65432;
		
		try (ServerSocket servidor = new ServerSocket(puerto)) {
			
		System.out.println("Servidor iniciado. Esperando jugadores ...");
		
			while (true) {
				Socket cliente = servidor.accept();
				HiloJugada hilo = new HiloJugada(cliente);
				hilo.start(); //Cada cliente se maneja en un hilo independiente
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
