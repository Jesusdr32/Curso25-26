package paquete;

public class Bailarin implements Runnable {
    private String nombre;
    private String casa;
    private String parejaActual;
    private String parejaAnterior;
    private PistaBaile pista;
    private boolean ocupada;

    public Bailarin(String nombre, String casa, PistaBaile pista) {
        this.nombre = nombre;
        this.casa = casa;
        this.pista = pista;
    }

    public String getNombre() { 
    	return nombre; 
    }
    
    public String getCasa() {
    	return casa; 
    }
    
    public String getParejaActual() { 
    	return parejaActual; 
    }
    
    public void setParejaActual(String pareja) { 
    	this.parejaActual = pareja; 
    }
    
    public String getParejaAnterior() { 
    	return parejaAnterior; 
    }
    
    public void setParejaAnterior(String pareja) { 
    	this.parejaAnterior = pareja; 
    }

	public boolean isOcupada() {
		return ocupada;
	}

	public void setOcupada(boolean ocupada) {
		this.ocupada = ocupada;
	}

	@Override
	public void run() {
		if (pista.isCambiarPareja() && !ocupada) {
			pista.parejaCambia(this);
		}
	}
}
