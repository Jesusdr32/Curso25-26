package ejercicio2;

import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.util.Scanner;

public class Ejercicio2_Cliente {

	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);
		
		InetAddress destino = InetAddress.getLocalHost();
		int puerto = 2013; //Puerto al que envio el datagrama
		
		System.out.println("Dime un número del 0 al 100");
		String num = sc.nextLine();
		byte[] numIntento = num.getBytes();
		byte [] bufer = new byte[1024];
		
		//CONSTRUYENDO EL DATAGRAMA A ENVIAR
		DatagramPacket envio = new DatagramPacket(numIntento, numIntento.length, destino, puerto);
		DatagramSocket socket = new DatagramSocket(2012);
		
		socket.send(envio);
		
		//ESPERANDO DATAGRAMA
		System.out.println("Esperando datagrama .......");
		DatagramPacket recibo = new DatagramPacket(bufer, bufer.length);
		socket.receive(recibo);
		System.out.println("El mensaje que recibe es \n\t" + recibo.getData());
		
		socket.close();
		sc.close();
	}

}
