package ejercicio1;

public class Ej_1_ParesNones_Servidor {
	
	private static String determinarGanador(Jugada j1, Jugada j2) {
		if ((j1.getNum() + j2.getNum()) % 2 == 0) {
			if (j1.getJuego().equals("PARES")) 
				return j1.getJugador();
				
			return j2.getJugador();
		} else {
			if (j1.getJuego().equals("NONES"))
				return j1.getJugador(); 
			
			return j2.getJugador();
		}
	}

	public static void main(String[] args) {
		
	}

}
