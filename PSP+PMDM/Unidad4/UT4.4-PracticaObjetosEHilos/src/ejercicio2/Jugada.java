package ejercicio2;

import java.io.Serializable;

public class Jugada implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private String jugador; //Nombre del jugador (cliente)
	private int opcion; // 1. piedra / 2. papel / 3. tijera
	//Campos para enviar resultados desde el servidor
	private String mensaje; //Mensaje explicativo ("GANA X!", "EMPATE!")
	private int puntajeJugador; //Puntos del cliente
	private int puntajeServidor; //Puntos del servidor
	
	public Jugada(String jugador, int opcion) {
		super();
		this.jugador = jugador;
		this.opcion = opcion;
		this.puntajeJugador = 0;
		this.puntajeServidor = 0;
	}

	public String getJugador() {
		return jugador;
	}

	public int getOpcion() {
		return opcion;
	}
	
	public String getMensaje() {
		return mensaje; 
	}
	
	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	
	public int getPuntajeJugador() {
		return puntajeJugador;
	}
	
	public void setPuntajeJugador(int puntajeJugador) {
		this.puntajeJugador = puntajeJugador;
	}
	
	public int getPuntajeServidor() {
		return puntajeServidor;
	}
	
	public void setPuntajeServidor(int puntajeServidor) {
		this.puntajeServidor = puntajeServidor;
	}

}
