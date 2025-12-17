package ejercicio2;

import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;
import java.util.Scanner;

public class Ej_2_ParesNones_Cliente {

	public static void main(String[] args) {
		String host = "localhost";
		int puerto = 65432;
		
		try (Socket cliente = new Socket(host, puerto)) {
			ObjectOutputStream oos = new ObjectOutputStream(cliente.getOutputStream());
			ObjectInputStream ois = new ObjectInputStream(cliente.getInputStream());
			Scanner sc = new Scanner(System.in);
			
			System.out.println((String) ois.readObject()); //Mensaje de bienvenida
			String nombre = sc.nextLine();
			oos.writeObject(nombre);
			
			while(true) {
				//Pedir juego y numero
				System.out.println("\nElige PARES o NONES: ");
				String juego = sc.nextLine().toUpperCase();
				
				System.out.println("Y el número: ");
				int num = Integer.parseInt(sc.nextLine());
				
				//Crear y enviar el objeto Jugada
				Jugada jugada = new Jugada(nombre, juego, num);
				oos.writeObject(jugada);
				oos.flush();
				
				//Recibir el objeto con el resultado procesado
				Jugada res = (Jugada) ois.readObject();
				
				//Mostrar resultados y marcador
				System.out.println("--- RESULTADO ---");
				System.out.println(res.getMensaje());
				System.out.println("Marcador -> " + nombre + ": " + res.getPuntajeJugador() + " | CPU: " + res.getPuntajeServidor());
				
				//Comprobar fin del juego (al llegar a 3 puntos)
				if (res.getPuntajeJugador() >= 3 || res.getPuntajeServidor() >= 3) {
					String ganadorFinal = (res.getPuntajeJugador() >= 3) ? "¡HAS GANADO LA PARTIDA!" : "La CPU ha ganado la partida ...";
					System.out.println("\n" + ganadorFinal);
					break;
				}
			}
			System.out.println("Fin de la partida");
			sc.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
