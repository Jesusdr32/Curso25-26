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

	public synchronized int getTurno() {
		return turno;
	}
	
	public boolean isFinJuego() {
		return finJuego;
	}

	public synchronized void jugada(int idJugador, int intento) {
		if (intento == numAdivinar) {
			finJuego = true;
			System.out.println("Jugador" + idJugador + "  gana, adivinó el número");
		}
		
		if (!finJuego) {
			turno ++;
			if (turno > numJugadores) {
				turno = 1;
			}
			
			System.out.println("Turno siguiente: Jugador" + turno);
		}
	}
	
	public int getNumAdivinar() {
		return numAdivinar;
	}
	
}
