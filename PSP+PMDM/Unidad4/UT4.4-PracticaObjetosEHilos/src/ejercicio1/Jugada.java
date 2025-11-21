package ejercicio1;

import java.io.Serializable;

public class Jugada implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private String nombre;
	private int miMarcador = 0;
	private int otroMarcador = 0;
	private int jugada;
	
	public Jugada(String nombre, int jugada) {
		super();
		this.nombre = nombre;
		this.jugada = jugada;
	}
	public Jugada() {super();}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getMiMarcador() {
		return miMarcador;
	}

	public void setMiMarcador(int miMarcador) {
		this.miMarcador = miMarcador;
	}

	public int getOtroMarcador() {
		return otroMarcador;
	}

	public void setOtroMarcador(int otroMarcador) {
		this.otroMarcador = otroMarcador;
	}

	public int getJugada() {
		return jugada;
	}

	public void setJugada(int jugada) {
		this.jugada = jugada;
	}

}
