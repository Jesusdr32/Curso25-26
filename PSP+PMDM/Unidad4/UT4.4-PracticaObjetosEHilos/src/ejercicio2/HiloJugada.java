package ejercicio2;

import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;
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
				oos.writeObject("Bienvenido! Escribe tu nombre");
				String nombre = (String) ois.readObject();
				System.out.println(nombre + " se ha conectado");
				
				int puntajeJugador = 0;
				int puntajeServidor = 0;
				
				Random random = new Random();
				int[] opciones = {1, 2, 3};
				
				while (puntajeJugador < 3 && puntajeServidor < 3) {
					oos.writeObject("Escribe tu jugada (1. piedra / 2. papel / 3. tijera): ");
					Jugada jugadaCliente = (Jugada) ois.readObject();
					
					int opcionServidor = opciones[random.nextInt(opciones.length)];
					Jugada resultado = new Jugada(nombre, jugadaCliente.getOpcion());
					
					//Determinar ganador
					String mensaje;
					
					if (jugadaCliente.getOpcion() == opcionServidor) 
						mensaje = "EMPATE! Servidor también eligió " + opcionServidor;
					else if (((jugadaCliente.getOpcion() == 1) && (opcionServidor == 3)) || ((jugadaCliente.getOpcion() == 2) && (opcionServidor == 1)) || ((jugadaCliente.getOpcion() == 3) && (opcionServidor == 2))) {
						mensaje = "GANAS! Servidor eligió " + opcionServidor;
						puntajeJugador ++;
					} else {
						mensaje = "GANA EL SERVIDOR! Servidor eligió " + opcionServidor;
						puntajeServidor ++;
					}
					
					resultado.setMensaje(mensaje);
					resultado.setPuntajeJugador(puntajeJugador);
					resultado.setPuntajeServidor(puntajeServidor);
					
					oos.writeObject(resultado);
				}
				
				oos.writeObject("Juego terminado. Ganador: " + (puntajeJugador == 3 ? nombre : "Servidor")); 
				
				System.out.println("Partida del jugador " + nombre + " finalizada");
				cliente.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
}
