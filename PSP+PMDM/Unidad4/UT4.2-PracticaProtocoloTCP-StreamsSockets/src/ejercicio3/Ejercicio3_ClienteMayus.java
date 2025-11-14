package ejercicio3;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;
import java.util.Scanner;

public class Ejercicio3_ClienteMayus {
	
	public static void main(String[] args) throws IOException{
		String host = "localhost"; //IP que se quiera utilizar para conectar con el servidor
		int numPuerto = 6000; //Puerto remoto
		Scanner sc = new Scanner(System.in);
		
		System.out.println("PROGRAMA CLIENTE INICIADO ...");
		Socket cliente = new Socket(host, numPuerto);
		
		//Creo flujo de salida al servidor
		DataOutputStream flujoSalida = new DataOutputStream(cliente.getOutputStream());
		
		//Creo flujo de entrada del servidor
		DataInputStream flujoEntrada = new DataInputStream(cliente.getInputStream());
		
		System.out.println("Dame una frase para convertirla a mayúsculas:");
		String frase = sc.nextLine();
		
		flujoSalida.writeUTF(frase);
		
		//El servidor me envía un mensaje
		System.out.println("Recibiendo del SERVIDOR: \n\t" + flujoEntrada.readUTF());
		
		//Cerrar streams y sockets
		flujoEntrada.close();
		flujoSalida.close();
		cliente.close();
		sc.close();
	}
	
}
