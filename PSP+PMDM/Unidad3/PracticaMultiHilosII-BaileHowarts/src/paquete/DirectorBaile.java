package paquete;

import java.util.*;

public class DirectorBaile implements Runnable {
    private PistaBaile pista;
    private int vueltas;

    public DirectorBaile(PistaBaile pista) {
        this.pista = pista;
        this.vueltas = new Random().nextInt(5) + 4;
    }

    @Override
    public void run() {
    	for (int i = vueltas; i > 0; i --) {
    		pista.setCambiarPareja(false);
    		int duracion = new Random().nextInt(4) + 3;
    		for (int j = duracion; j > 0; j --) {
    			System.out.println("+++++++Nananana, na, na,++++++++++++++++");
    		}
    		System.out.println("=======Cambio de Pareja=====");
    		pista.setCambiarPareja(true);
    	}
    }
}
