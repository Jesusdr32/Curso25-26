package paquete;

import java.io.IOException;

public class EjecutarURLProcessBuilder {

	static int retorno = -2;
	public static void main(String[] args) throws IOException, InterruptedException {
		
		ProcessBuilder pb = new ProcessBuilder("C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe");
		
		Process p = pb.start();
		
		retorno = p.waitFor();
		
		System.out.println("Llegamos aquí cuando la ejecución del proceso finaliza");
		
		System.out.println("La ejecución devuelve: "+retorno);
	}

}
