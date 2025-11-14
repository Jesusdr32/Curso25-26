package ejercicio2;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Random;

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
		
		Random random = new Random();
		int numSecreto = random.nextInt(101);
		boolean acierto = false;
		int vueltas = 0;
		
		do {
			int numCliente = flujoEntrada.readInt();
			System.out.println("Cliente envía " + numCliente);
			if (numSecreto == numCliente) {
				flujoSalida.writeUTF("¡Has adivinado el número!");
				acierto = true;
				flujoSalida.writeBoolean(acierto);
			} else {
				if (numCliente < numSecreto)
					flujoSalida.writeUTF("El número que buscamos es mayor");
				else
					flujoSalida.writeUTF("El número que buscamos es menor");
				vueltas ++;
				flujoSalida.writeBoolean(acierto);
			}
		} while(!acierto && vueltas < 5);
		
		//Cerrar streams y sockets
		flujoEntrada.close();
		flujoSalida.close();
		servidor.close();
		clienteConectado.close();
		
	}

}
