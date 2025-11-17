package ejercicio2;

import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.util.Random;

public class Ejercicio2_Servidor {

	private static Random random = new Random();
	
	public static void main(String[] args) throws Exception {
		int numAleatorio = random.nextInt(101);
		
		
		byte [] bufer = new byte[1024]; //Buffer para recibir el datagrama
		//ASOCIO AL PUERTO 2013
		DatagramSocket socket = new DatagramSocket(2013);
		
		//ESPERANDO DATAGRAMA
		System.out.println("Esperando datagrama .......");
		DatagramPacket recibo = new DatagramPacket(bufer, bufer.length);
		socket.receive(recibo); //REcibo datagrama
		
		InetAddress destino = recibo.getAddress();
		int puerto = recibo.getPort(); //Puerto al que envio el datagrama		
		
		String paquete = new String(recibo.getData()); //Obtengo String
		System.out.println("El número recibido es \n\t" + paquete);
		
		String mensaje = null;
		if (Integer.parseInt(paquete) == numAleatorio)
			mensaje = "Enorabuena, lo has acertado";
		else {
			if (Integer.parseInt(paquete) > numAleatorio)
				mensaje = "El número dado es MAYOR que el número a adivinar";
			if (Integer.parseInt(paquete) < numAleatorio)
				mensaje = "El número dado es MENOR que el número a adivinar";
		}
		byte[] mensajeB = mensaje.getBytes();
		
		//CONSTRUYENDO EL DIAGRAMA A ENVIAR
		DatagramPacket envio = new DatagramPacket(mensajeB, mensajeB.length, destino, puerto);
		socket.send(envio);
		
		socket.close();
	}

}
