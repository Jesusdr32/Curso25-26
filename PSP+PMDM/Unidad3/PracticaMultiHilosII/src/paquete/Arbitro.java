package paquete;

public class Arbitro {
	
	private int numJugadores;
	private int turno;
	private int numAdivinar;
	private boolean finJuego;
	
	public Arbitro(int numJugadores) {
		super();
		this.numJugadores = numJugadores;
		this.numAdivinar = 1 + (int) (10 * Math.random());
		this.turno = 1;
		this.finJuego = false;
	}

	public int getTurno() {
		return turno;
	}
	
	public boolean isFinJuego() {
		return finJuego;
	}
	
	public void setFinJuego(boolean finJuego) {
		this.finJuego = finJuego;
	}

	public synchronized String jugada(int idJugador, int intento) {
		if (finJuego) {
			return "El juego ya ha finalizado";
		}
		
		if (idJugador != turno) {
			return "No es tu turno, jugador " + idJugador;
		}
		
		String resultado;
		
		if (intento == numAdivinar) {
			finJuego = true;
			resultado = idJugador + "  gana, adivinó el número";
		}
		else {
			resultado = "Incorrecto jugador " + idJugador;
		}
		
		if (!finJuego) {
			turno ++;
			if (turno > numJugadores) {
				turno = 1;
			}
			
			resultado += "\nTurno siguiente: jugador " + turno;
		}
		
		return resultado;
	}
	
	public int getNumAdivinar() {
		return numAdivinar;
	}
	
}
