package ejercicio1;

import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.util.Scanner;

public class Ejercicio1_Cliente {

	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);
		
		InetAddress destino = InetAddress.getLocalHost();
		int puerto = 12345; //Puerto al que envio el datagrama
		
		System.out.println("Introduce la frase que quieras que te devuelvan en mayusculas: ");
		String saludo = sc.nextLine();
		byte[] mensaje = saludo.getBytes(); //Codifico String a bytes
		byte[] bufer = new byte[1024]; //Bufer para recibir el datagrama
		
		//CONSTRUYO EL DATAGRAMA A ENVIAR
		DatagramPacket envio = new DatagramPacket(mensaje, mensaje.length, destino, puerto);
		DatagramSocket socket = new DatagramSocket(34567);//Puerto local
		
		socket.send(envio);
		
		//ESPERANDO DATAGRAMA
		System.out.println("Esperando datagrama .......");
		DatagramPacket recibo = new DatagramPacket(bufer, bufer.length);
		socket.receive(recibo); //Recibo datagrama
		
		String paquete = new String(recibo.getData()); //Obtengo String
		System.out.println("El mensaje que nos ha devuelto es \n\t" + paquete);
		
		socket.close();//Cierro el socket
		sc.close();
	}

}
