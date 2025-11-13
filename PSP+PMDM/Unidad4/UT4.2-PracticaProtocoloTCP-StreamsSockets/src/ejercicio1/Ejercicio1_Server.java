package ejercicio1;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class Ejercicio1_Server {

	public static void main(String[] args) throws IOException {
		//Asigno un puerto a mi aplicación e instancio un serversocket con el puerto
		//Así como un socket para cuando se conecta un cliente
		int numPuerto = 6000; //Puerto
		ServerSocket servidor = new ServerSocket(numPuerto);
		System.out.println("Esperando al cliente ...");
		Socket clienteConectado = servidor.accept();
		
		//Creo flujo de entrada del cliente
		DataInputStream flujoEntrada = new DataInputStream(clienteConectado.getInputStream());
		
		//Creo flujo de salida al cliente
		DataOutputStream flujoSalida = new DataOutputStream(clienteConectado.getOutputStream());
		
		String frase = flujoEntrada.readUTF();
		
		//Modifico la frase para que sea mayúsculas y se la envío al cliente
		flujoSalida.writeUTF(frase.toUpperCase());
		
		//Cerrar streams y sockets
		flujoEntrada.close();
		flujoSalida.close();
		servidor.close();
		clienteConectado.close();
		
	}

}
