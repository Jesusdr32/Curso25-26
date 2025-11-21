package ejercicio1;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class Ejercicio1_Servidor {

	public static void main(String[] args) throws IOException, ClassNotFoundException {
		//Asigno un puerto a mi aplicación e instancio un servercocket con el puerto 
		//Asi como un socket para cuando se conecta un cliente
		int numPuerto = 6000; //Puerto
		ServerSocket servidor = new ServerSocket(numPuerto);
		System.out.println("Servidor esperando a dos jugadores ...");
		Socket jugador1 = servidor.accept();
		System.out.println("Jugador 1 conectado");
		Socket jugador2 = servidor.accept();
		System.out.println("Jugador 2 conectado");
		
		//Creo flujo de entrada del jugador1
		ObjectInputStream ois1 = new ObjectInputStream(jugador1.getInputStream());
		//Creo flujo de entrada del jugador2
		ObjectInputStream ois2 = new ObjectInputStream(jugador2.getInputStream());
		
		//Creo flujo de salida al jugador1
		ObjectOutputStream oos1 = new ObjectOutputStream(jugador1.getOutputStream());
		//Creo flujo de salida al jugador2
		ObjectOutputStream oos2 = new ObjectOutputStream(jugador2.getOutputStream());
		
		Jugada jug1 = (Jugada) ois1.readObject();
		Jugada jug2 = (Jugada) ois2.readObject();
		
		//Miro quien gana, pierde, o si empatan
		
	}

}
