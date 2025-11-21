package ejercicio1;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;
import java.util.Scanner;

public class Ejercicio1_Cliente {

	public static void main(String[] args) throws IOException {
		Scanner sc = new Scanner(System.in);
		System.out.println("Dime tu nombre: ");
		String nombre = sc.nextLine();
		System.out.println("¿QUieres 1 - PIEDRA / 2 - PAPEL / 3 - TIJERAS?");
		int jugada = Integer.parseInt(sc.nextLine());
		Jugada jug = new Jugada(nombre, jugada);
		String host = "localhost"; //IP que se quiera utilizar para conectar
		int numPuerto = 6000; //Puerto remoto
		
		Socket cliente = new Socket(host, numPuerto);
		
		//Creo flujo de salida al servidor
		ObjectOutputStream oos = new ObjectOutputStream(cliente.getOutputStream());
		
		//Creo flujo de entrada del servidor
		ObjectInputStream ois = new ObjectInputStream(cliente.getInputStream());
		
		oos.writeObject(jug);
		
		//El servidor me envía un mensaje
		
		//Cerrar streams y sockets
		oos.close();
		ois.close();
		cliente.close();
		sc.close();
	}

}
