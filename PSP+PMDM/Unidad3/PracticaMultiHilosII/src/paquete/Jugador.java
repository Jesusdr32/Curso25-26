package paquete;

public class Jugador extends Thread {
	
	private int idJugador;
	private Arbitro arbitro;
	
	public Jugador(int idJugador, Arbitro arbitro) {
		super();
		this.idJugador = idJugador;
		this.arbitro = arbitro;
	}
	
	public void run() {
		if (arbitro.getTurno() == idJugador) {
			
		}
	}
}
