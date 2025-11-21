package ejercicio1;

import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

public class Ejercicio1_Servidor {

	public static void main(String[] args) throws Exception {
		InetAddress destino = InetAddress.getLocalHost();
		int puerto = 34567; //Puerto al que envio el datagrama
		
		byte[] bufer = new byte[1024]; //Bufer para recibir el datagrama
		//ASOCIO EL SOCKE AL PUERTO 12345
		DatagramSocket socket = new DatagramSocket(12345);
		
		//ESPERANDO DATAGRAMA
		System.out.println("Esperando datagrama ......");
		DatagramPacket recibo = new DatagramPacket(bufer, bufer.length);
		socket.receive(recibo); //Recibo datagrama
		
		String paquete = new String(recibo.getData()); //Obtengo String
		System.out.println("El mensaje recibido es \n\t" + paquete);
		
		byte [] mensaje = paquete.toUpperCase().getBytes();
		
		//CONSTRUYO EL DIAGRAMA A ENVIAR
		DatagramPacket envio =  new DatagramPacket(mensaje, mensaje.length, destino, puerto);
		socket.send(envio);
		
		socket.close(); //Cierro el socket
	}

}
