package ejercicio2;

import java.io.Serializable;

public class Jugada implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private String jugador; //Nombre del jugador que envía la jugada
	private boolean turno; //Si eliges o no el que jugar (pares o nones)
	private String juego; //Pares o nones
	private int num; //Numero que envia el jugador
	
	//Campos para enviar resultados desde el servidor
	private String mensaje; //Mensaje explicativo ("GANA X!")
	private int puntajeJugador; //Puntos del cliente
	private int puntajeServidor; //Puntos del servidor
	
	public Jugada(String jugador, String juego, int num) {
		super();
		this.jugador = jugador;
		this.juego = juego;
		this.num = num;
		this.puntajeJugador = 0;
		this.puntajeServidor = 0;
	}
	
	public String getJugador() {
		return jugador;
	}
	
	public boolean getTurno() {
		return turno;
	}
	
	public void setTurno(boolean turno) {
		this.turno = turno;
	}
	
	public String getJuego() {
		return juego;
	}
	
	public void setJuego(String juego) {
		this.juego = juego;
	}
	
	public int getNum() {
		return num;
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
