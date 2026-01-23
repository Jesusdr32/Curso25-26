package ejercicio2;

import java.net.ServerSocket;
import java.net.Socket;

public class Ej_2_ParesNones_Servidor {

	public static void main(String[] args) {
		int puerto = 65432;
		
		while(true) {
			try (ServerSocket servidor = new ServerSocket(puerto)) {
				Socket cliente = servidor.accept();
				HiloJugada hilo = new HiloJugada(cliente);
				hilo.start(); //Cada cliente se maneja en un hilo independiente
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

}
