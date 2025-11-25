package ejercicio1;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.HashMap;

public class Ejercicio1_Servidor {
	
	private static String determinarGanador(Jugada j1, Jugada j2) {
		if (j1.getOpcion() == j2.getOpcion()) return null;
		switch (j1.getOpcion()) {
		case 1: return j2.getOpcion() == 3 ? j1.getJugador() : j2.getJugador();
		case 2: return j2.getOpcion() == 1 ? j1.getJugador() : j2.getJugador();
		case 3: return j2.getOpcion() == 2 ? j1.getJugador() : j2.getJugador();
		default: return null;
		}
	}
	
	public static void main(String[] args) throws IOException, ClassNotFoundException {
		int puerto = 65432;
		ServerSocket servidor = new ServerSocket(puerto);
		System.out.println("Esperando jugadores ...");
		Socket j1 = servidor.accept();
		Socket j2 = servidor.accept();
		
		ObjectOutputStream oos1 = new ObjectOutputStream(j1.getOutputStream());
		ObjectInputStream ois1 = new ObjectInputStream(j1.getInputStream());
		
		ObjectOutputStream oos2 = new ObjectOutputStream(j2.getOutputStream());
		ObjectInputStream ois2 = new ObjectInputStream(j2.getInputStream());
		
		oos1.writeObject("Bienvenido! Escribe tu nombre:");
		oos2.writeObject("Bienvenido! Escribe tu nombre:");
		
		String jugador1 = (String) ois1.readObject();
		String jugador2 = (String) ois2.readObject();
		
		HashMap<String, Integer> marcador = new HashMap<>();
		marcador.put(jugador1, 0);
		marcador.put(jugador2, 0);
		
		while (marcador.get(jugador1) < 3 && marcador.get(jugador2) < 3) {
			oos1.writeObject("Escribe tu jugada (1. piedra / 2. papel / 3. tijera): ");
			oos2.writeObject("Escribe tu jugada (1. piedra / 2. papel / 3. tijera): ");
			
			Jugada jugada1 = (Jugada) ois1.readObject();
			Jugada jugada2 = (Jugada) ois2.readObject();
			
			String ganador = determinarGanador(jugada1, jugada2);
			String mensaje = (ganador == null) ? "EMPATE!" : "GANA " + ganador + "!";
			if (ganador != null)
				marcador.put(ganador, marcador.get(ganador) + 1);
			
			//Actualizamos ambos objetos Jugada con el resultado
			jugada1.setGanador(ganador);
			jugada1.setMensaje(mensaje);
			jugada1.setMarcador(new HashMap<>(marcador));
			
			jugada2.setGanador(ganador);
			jugada2.setMensaje(mensaje);
			jugada2.setMarcador(new HashMap<>(marcador));
			
			oos1.writeObject(jugada1);
			oos2.writeObject(jugada2);
		}
		
		j1.close();
		j2.close();
		servidor.close();
		System.out.println("Juego finalizado");
	}

}
