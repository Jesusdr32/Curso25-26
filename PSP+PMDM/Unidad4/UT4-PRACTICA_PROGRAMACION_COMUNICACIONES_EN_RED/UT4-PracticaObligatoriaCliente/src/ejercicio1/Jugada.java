package ejercicio1;

import java.io.Serializable;
import java.util.HashMap;

public class Jugada implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private String jugador; //Nombre del jugador que envía la jugada
	private boolean turno; //Si eliges o no el que jugar (pares o nones)
	private String juego; //Pares o nones
	private int num; //Numero que envia el jugador
	
	//Campos para enviar resultados desde el servidor
	private String ganador; //Nombre del ganador de la ronda
	private String mensaje; //Mensaje explicativo ("GANA X!")
	private HashMap<String, Integer> marcador; //Marcador actualizado
	
	public Jugada(String jugador, String juego, int num) {
		super();
		this.jugador = jugador;
		this.juego = juego;
		this.num = num;
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
	
	public String getGanador() {
		return ganador;
	}
	
	public void setGanador(String ganador) {
		this.ganador = ganador;
	}
	
	public String getMensaje() {
		return mensaje;
	}
	
	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	
	public HashMap<String, Integer> getMarcador() {
		return marcador;
	}
	
	public void setMarcador(HashMap<String, Integer> marcador) {
		this.marcador = marcador;
	}
}
