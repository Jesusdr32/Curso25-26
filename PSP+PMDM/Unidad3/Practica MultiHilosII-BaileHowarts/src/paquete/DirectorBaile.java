package paquete;

public class DirectorBaile {
	
	private int rotaciones;
	private int duracion = (int) (Math.random() * (6 - 3 + 1)) + 3;
	
	public DirectorBaile() {
		super();
		this.rotaciones = (int) (Math.random() * (8 - 4 + 1)) + 4;
	}

	public int getRotaciones() {
		return rotaciones;
	}

	public void setRotaciones(int rotaciones) {
		this.rotaciones = rotaciones;
	}

	public int getDuracion() {
		return duracion;
	}

	public void setDuracion(int duracion) {
		this.duracion = duracion;
	}
	
}
