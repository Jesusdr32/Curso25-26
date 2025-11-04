package paquete;

import java.util.Random;

public class Cocinero implements Runnable {
	private String especializacion;
	private Restaurante restaurante;
	private final Random random = new Random();
	
	public Cocinero(String especializacion, Restaurante restaurante) {
		this.especializacion = especializacion;
		this.restaurante = restaurante;
	}
	
	@Override
	public void run() {
		int maxTiempo;
		try {
			for (int i = 0; i < 15; i ++) {
				if (this.especializacion.equals("hamburguesa")) {
					maxTiempo = 300;
				} else {
					maxTiempo = 200;
				}
				int tiempo = random.nextInt(maxTiempo + 1);	
				Thread.sleep(tiempo);
				restaurante.poner(this.especializacion);
			}
		} catch (InterruptedException e) {
			e.printStackTrace();
		} finally {
			restaurante.cocineroTermina();
		}
	}
}
