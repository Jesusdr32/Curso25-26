package ejercicio2;

import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;
import java.util.HashMap;
import java.util.Random;

public class HiloJugada extends Thread {
	private Socket cliente;
	
	public HiloJugada(Socket cliente) {
		this.cliente = cliente;
	}
	
	@Override
	public void run() {
		try (
			ObjectOutputStream oos = new ObjectOutputStream(cliente.getOutputStream());
			ObjectInputStream ois = new ObjectInputStream(cliente.getInputStream());
		) {
			oos.writeObject("Bienvenido! Escribe tu nombre: ");
			String nombre = (String) ois.readObject();
			System.out.println(nombre + " se ha conectado");
			
			int puntajeJugador = 0;
			int puntajeServidor = 0;
			
			Random random = new Random();
			
			while (puntajeJugador < 3 && puntajeServidor < 3) {
				Jugada jugadaCliente = (Jugada) ois.readObject();
				
				int numServidor = random.nextInt(11);
				int suma = jugadaCliente.getNum() + numServidor;
				
				//Determinar ganador de la ronda
				String ganadorRonda;
				if ((suma % 2 == 0 && jugadaCliente.getJuego().equalsIgnoreCase("PARES")) || (suma % 2 != 0 && jugadaCliente.getJuego().equalsIgnoreCase("NONES"))) {
					ganadorRonda = nombre;
					puntajeJugador ++;
				} else {
					ganadorRonda = "Servidor";
					puntajeServidor ++;
				}
				
				// Preparamos la respuesta
				HashMap<String, Integer> marcador = new HashMap<>();
				marcador.put(nombre, puntajeJugador);
				marcador.put("Servidor", puntajeServidor);
				
				String mensaje = String.format("Tú: %d, Servidor: %d (Suma: %d). ¡Gana %s!", jugadaCliente.getNum(), numServidor, suma, ganadorRonda);
				
				jugadaCliente.setMensaje(mensaje);
				jugadaCliente.setPuntajeJugador(puntajeJugador);
				jugadaCliente.setPuntajeServidor(puntajeServidor);
				
				// Log en la consola del servidor para seguimiento
				System.out.println("[" + nombre + "] Jugó: " + jugadaCliente.getNum() + " | CPU: " + numServidor + " | " + mensaje);
				
				// Enviamos el objeto actualizado de vuelta
				oos.writeObject(jugadaCliente);
				oos.flush();
			}
			System.out.println("Partida finalizada con " + nombre);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
