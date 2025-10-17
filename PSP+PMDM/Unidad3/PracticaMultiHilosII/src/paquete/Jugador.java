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
		try {
			do {
				if (arbitro.getTurno() == idJugador) {
					int numAleatorio = (1 + (int) (10 * Math.random()));
				
					System.out.println("Jugador" + idJugador + " dice " + numAleatorio);
				
					arbitro.jugada(idJugador, numAleatorio);
				
					Thread.sleep(1000);
				}
			} while (!arbitro.isFinJuego());
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
}
