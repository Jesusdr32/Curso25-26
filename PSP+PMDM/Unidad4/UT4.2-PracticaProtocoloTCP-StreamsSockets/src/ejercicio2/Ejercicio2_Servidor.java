package ejercicio2;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class Ejercicio2_Servidor {

	public static void main(String[] args) throws IOException {
		//Asigno un puerto a mi aplicación e instancio un serversocket con el puerto
		//Así como un socket para cuando se conecta un cliente
		int numPuerto = 2012; //Puerto
		ServerSocket servidor = new ServerSocket(numPuerto);
		System.out.println("Esperando al cliente ...");
		Socket clienteConectado = servidor.accept();
		
		//Creo flujo de entrada del cliente
		DataInputStream flujoEntrada = new DataInputStream(clienteConectado.getInputStream());
		
		//Creo flujo de salida al cliente
		DataOutputStream flujoSalida = new DataOutputStream(clienteConectado.getOutputStream());
		
		int numSecreto = (int) Math.random() * 100;
		int numCliente = flujoEntrada.readInt();
		boolean acierto = false;
		
		do {
			
			System.out.println("Cliente envía " + numCliente);
			if (numSecreto == numCliente) {
				System.out.println("¡Has adivinado el número!");
				acierto = true;
			} else 
				System.out.println("Prueba otra vez");
		} while(!acierto);
		
		//Cerrar streams y sockets
		flujoEntrada.close();
		flujoSalida.close();
		servidor.close();
		clienteConectado.close();
		
	}

}
