package ejercicio1;

import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;
import java.util.Scanner;

public class Ejercicio1_Cliente {

	public static void main(String[] args) throws Exception {
		String host = "localhost";
		int puerto = 65432;
		Socket cliente = new Socket(host, puerto);
		
		ObjectOutputStream oos = new ObjectOutputStream(cliente.getOutputStream());
		ObjectInputStream ois = new ObjectInputStream(cliente.getInputStream());
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println((String) ois.readObject()); //mensaje de bienvenida
		String nombre = sc.nextLine();
		oos.writeObject(nombre);
		
		while (true) {
			System.out.println((String) ois.readObject()); //pedir jugada
			int opcion = Integer.parseInt(sc.nextLine());
			Jugada jugada = new Jugada(nombre, opcion);
			oos.writeObject(jugada);
			
			Jugada res = (Jugada) ois.readObject();
			System.out.println(res.getMensaje());
			System.out.println("Marcador: " + res.getMarcador());
			
			if (res.getMarcador().get(nombre) >= 3 || res.getMarcador().values().stream().anyMatch(v -> v >= 3)) {
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
