package ejercicio2;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;
import java.util.Scanner;

public class Ejercicio2_Cliente {

	public static void main(String[] args) throws IOException {
		String host = "localhost"; //IP que se quiera utilizar para conectar con el servidor
		int numPuerto = 2012; //Puerto remoto
		Scanner sc = new Scanner(System.in);
		
		System.out.println("PROGRAMA CLIENTE INICIADO ...");
		Socket cliente = new Socket(host, numPuerto);
		
		//Creo flujo de salida al servidor 
		DataOutputStream flujoSalida = new DataOutputStream(cliente.getOutputStream());
		
		//Creo flujo de entrada del servidor
		DataInputStream flujoEntrada = new DataInputStream(cliente.getInputStream());
		
		System.out.println("Dame un número entre el 0 y el 100");
		flujoSalida.writeInt(Integer.parseInt(sc.nextLine()));
		int vueltas = 1;
		boolean acierto = false;
		
		do {
			System.out.println("Recibiendo del SERVIDOR: \n\t" + flujoEntrada.readUTF());
			acierto = flujoEntrada.readBoolean();
			flujoSalida.writeInt(Integer.parseInt(sc.nextLine()));
			vueltas ++;
		} while (!acierto && vueltas < 5);
		if (acierto)
			System.out.println("Has ganado");
		else
			System.out.println("Se acabaron los intentos");
		
		//Cerrar streams y sockets
		flujoEntrada.close();
		flujoSalida.close();
		cliente.close();
		sc.close();
		
	}

}
