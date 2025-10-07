package paquete;

public class Ejercicio1_PAR_IMPAR extends Thread {
	private boolean par;
	
	public Ejercicio1_PAR_IMPAR (boolean par) {
		super();
		this.par = par;
	}
	
	public void escribir() {
		try {
			if (par) {
				for (int i = 1; i <= 10; i ++) {
					if (i % 2 == 0) {
						System.out.println(i);
						Thread.sleep(1000);
					}
				}
			} else {
				for (int i = 1; i <= 10; i ++) {
					if (i % 2 != 0) {
						System.out.println(i);
						Thread.sleep(1000);
					}
				}
			}
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	@Override
	public void run() {
		this.escribir();
	}
	
	public static void main(String[] args) {
		Ejercicio1_PAR_IMPAR par = new Ejercicio1_PAR_IMPAR(true);
		Ejercicio1_PAR_IMPAR impar = new Ejercicio1_PAR_IMPAR(false);
		
		par.start();
		impar.start();
	}

}
