package ejercicio2;

import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;
import java.util.Scanner;

public class Ejercicio2_Cliente {

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
			
			while (true) {
				System.out.println((String) ois.readObject()); //Pedir jugada
				int opcion = Integer.parseInt(sc.nextLine());
				oos.writeObject(new Jugada(nombre, opcion));
				
				Object obj = ois.readObject();
				if (obj instanceof String) {
					System.out.println((String) obj);
					break;
				}
				
				Jugada res = (Jugada) obj;
				System.out.println(res.getMensaje());
				System.out.println("Marcador: " + nombre + " " + res.getPuntajeJugador() + " - Servidor " + res.getPuntajeServidor());
				
				if (res.getPuntajeJugador() >= 3 || res.getPuntajeServidor() >= 3) {
					System.out.println("Juego terminado");
					break;
				}
			}
			sc.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
}
