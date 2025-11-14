package ejercicio3;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class Ejercicio3_Servidor {

	public static void main(String[] args) throws IOException {
		//Asigno un puerto a mi aplicación e instancio un serversocket con el puerto
		//Así como un socket para cuando se conecta un cliente
		int numPuerto = 6000; //Puerto
		ServerSocket servidorMayus = new ServerSocket(numPuerto);
		System.out.println("Esperando al cliente ...");
		Socket clienteConectadoMayus = servidorMayus.accept();
		Socket clienteConectadoMinus = servidorMayus.accept();
		
		//Creo flujo de entrada del cliente
		DataInputStream flujoEntradaMayus = new DataInputStream(clienteConectadoMayus.getInputStream());
		DataInputStream flujoEntradaMinus = new DataInputStream(clienteConectadoMinus.getInputStream());
		
		//Creo flujo de salida al cliente
		DataOutputStream flujoSalidaMayus = new DataOutputStream(clienteConectadoMayus.getOutputStream());
		DataOutputStream flujoSalidaMinus = new DataOutputStream(clienteConectadoMinus.getOutputStream());
		
		String fraseMayus = flujoEntradaMayus.readUTF();
		String fraseMinus = flujoEntradaMinus.readUTF();
		
		//Modifico la frase para que sea mayúsculas y se la envío al cliente
		flujoSalidaMayus.writeUTF(fraseMayus.toUpperCase());
		flujoSalidaMinus.writeUTF(fraseMinus.toLowerCase());
		
		//Cerrar streams y sockets
		flujoEntradaMayus.close();
		flujoSalidaMayus.close();
		flujoEntradaMinus.close();
		flujoSalidaMinus.close();
		servidorMayus.close();
		clienteConectadoMayus.close();
		clienteConectadoMinus.close();
		
	}

}
