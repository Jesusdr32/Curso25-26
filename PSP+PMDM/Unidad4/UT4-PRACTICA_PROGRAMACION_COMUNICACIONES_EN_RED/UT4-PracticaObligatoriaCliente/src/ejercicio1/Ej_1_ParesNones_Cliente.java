package ejercicio1;

import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;
import java.util.Scanner;

public class Ej_1_ParesNones_Cliente {

	public static void main(String[] args) throws Exception {
		String host = "localhost";
		int puerto = 30000;
		Socket cliente = new Socket(host, puerto);
		
		ObjectOutputStream oos = new ObjectOutputStream(cliente.getOutputStream());
		ObjectInputStream ois = new ObjectInputStream(cliente.getInputStream());
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println((String) ois.readObject()); //mensaje de bienvenida
		String nombre = sc.nextLine();
		oos.writeObject(nombre);
		
		while (true) {
			String instrucciones = (String) ois.readObject();
			System.out.println(instrucciones); //"Escribe tu juego ..."
			String juego = "";
			if (instrucciones.contains("Te toca elegir")) {
				juego = sc.nextLine();
				oos.writeObject(juego);
			} else {
				//Si no nos toca elegir, solo confirmamos recepcion
				oos.writeObject("OK");
			}
			
			System.out.println((String) ois.readObject()); //"Dame un número"
			int num = Integer.parseInt(sc.nextLine());
			
			Jugada jugada = new Jugada(nombre, juego, num);
			oos.writeObject(jugada);
			oos.flush(); 
			
			Jugada res = (Jugada) ois.readObject();
			System.out.println("\n" + res.getMensaje());
			System.out.println("Marcador: " + res.getMarcador());
			
			if (res.getMarcador().values().stream().anyMatch(v -> v >= 3)) {
				System.out.println("El juego ha terminado");
				break;
			}
				
		}
		oos.close();
		ois.close();
		cliente.close();
		sc.close();
	}

}
