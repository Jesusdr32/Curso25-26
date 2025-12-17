package ejercicio1;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.HashMap;

public class Ej_1_ParesNones_Servidor {

	public static void main(String[] args) throws IOException, ClassNotFoundException {
		int puerto = 30000;
		ServerSocket servidor = new ServerSocket(puerto);
		System.out.println("Esperando jugadores ...");
		
		Socket j1 = servidor.accept();
		
		ObjectOutputStream oos1 = new ObjectOutputStream(j1.getOutputStream());
		ObjectInputStream ois1 = new ObjectInputStream(j1.getInputStream());
		
		Socket j2 = servidor.accept();
		
		ObjectOutputStream oos2 = new ObjectOutputStream(j2.getOutputStream());
		ObjectInputStream ois2 = new ObjectInputStream(j2.getInputStream());
		
		oos1.writeObject("Bienvenido! Escribe tu nombre: ");
		oos2.writeObject("Bienvenido! Escribe tu nombre: ");
		
		String jugador1 = (String) ois1.readObject();
		String jugador2 = (String) ois2.readObject();
		
		HashMap<String, Integer> marcador = new HashMap<>();
		marcador.put(jugador1, 0);
		marcador.put(jugador2, 0);
		
		int turno = 1; //Quien elige esta ronda
		while (marcador.get(jugador1) < 3 && marcador.get(jugador2) < 3) {
			String juegoJ1, juegoJ2;
			
			if (turno == 1) { //Turno 1 elige el Jugador 1
				oos1.writeObject("Te toca elegir. Escribe PARES o NONES: ");
				juegoJ1 = (String) ois1.readObject();
				juegoJ2 = juegoJ1.equalsIgnoreCase("PARES") ? "NONES" : "PARES";
				oos2.writeObject("El jugador 1 ha elegido " + juegoJ1 + ". A ti te toca " + juegoJ2);
				ois2.readObject(); //Sincronización (el cliente envía un 'OK')
				System.out.println("Jugador 2 juega " + juegoJ2);
			} else { //Turno 2 elige el Jugador 2
				oos2.writeObject("Te toca elegir. Escribe PARES o NONES: ");
				juegoJ2 = (String) ois2.readObject();
				juegoJ1 = juegoJ2.equalsIgnoreCase("PARES") ? "NONES" : "PARES";
				oos1.writeObject("El jugador 2 ha elegido " + juegoJ2 + ". A ti te toca " + juegoJ2);
				ois1.readObject(); //Sincronizacion (el cliente envia un 'OK')
				System.out.println("Jugador 1 juega " + juegoJ1);
			}
			
			//Pedir número
			oos1.writeObject("Dame un número: ");
			oos2.writeObject("Dame un número: ");
			
			Jugada jugada1 = (Jugada) ois1.readObject();
			Jugada jugada2 = (Jugada) ois2.readObject();
			
			jugada1.setJuego(juegoJ1);
			jugada2.setJuego(juegoJ2);
			
			System.out.println("Número jugador1: " + jugada1.getNum());
			System.out.println("Número jugador2: " + jugada2.getNum()); 
			String ganador = determinarGanador(jugada1, jugada2);
			marcador.put(ganador, marcador.get(ganador) + 1);
			String mensaje = "Resultado: " + (jugada1.getNum() + jugada2.getNum()) + ". ¡GANA " + ganador + "!";
			System.out.println(mensaje + ". " + jugada1.getJugador() + ": " + marcador.get(jugador1) + ", " + jugada2.getJugador() + ": " + marcador.get(jugador2));
			
			//Actualizamos ambos objetos Jugada con el resultado
			jugada1.setGanador(ganador);
			jugada1.setMensaje(mensaje);
			jugada1.setMarcador(new HashMap<>(marcador));
			
			jugada2.setGanador(ganador);
			jugada2.setMensaje(mensaje);
			jugada2.setMarcador(new HashMap<>(marcador));
			
			oos1.writeObject(jugada1);
			oos2.writeObject(jugada2);
			
			turno = (turno == 1) ? 2 : 1;
		}
		
		j1.close();
		j2.close();
		servidor.close();
		System.out.println("Juego finalizado");
	}
	
	private static String determinarGanador(Jugada j1, Jugada j2) {
		int suma = j1.getNum() + j2.getNum();
		//Si la suma es par, gana el que eligió PARES. Si es impar, el que eligió NONES
		if (suma % 2 == 0) 
			return j1.getJuego().equalsIgnoreCase("PARES") ? j1.getJugador() : j2.getJugador();
		else
			return j1.getJuego().equalsIgnoreCase("NONES") ? j1.getJugador() : j2.getJugador();
	}

}
