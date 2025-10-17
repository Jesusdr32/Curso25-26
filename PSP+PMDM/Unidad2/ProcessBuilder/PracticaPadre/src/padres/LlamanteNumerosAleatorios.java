package padres;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class LlamanteNumerosAleatorios {
	
	public static void main(String[] args) throws IOException, InterruptedException {
		ProcessBuilder pbGenerador = new ProcessBuilder("java", "-cp", "../PracticaHijos/bin", "hijos.GenerarNumerosAleatorios");
		
		ProcessBuilder pbOrdenador = new ProcessBuilder("java", "-cp", "../PracticaHijos/bin", "hijos.OrdenarNumerosAleatorios");
		
		Process pGenerador = pbGenerador.start();
		
		Process pOrdenador = pbOrdenador.start();
		
		BufferedReader brGenerador = new BufferedReader(new InputStreamReader(pGenerador.getInputStream()));
		
		BufferedWriter bwOrdenador = new BufferedWriter(new OutputStreamWriter(pOrdenador.getOutputStream()));
		
		String linea;
		
		int valorSalidaGenerador = pGenerador.waitFor();
		
		System.out.println("Valor de Salida programa 1: " + valorSalidaGenerador);
		System.out.println("Pintando la salida del programa de generacion de impares: ");
		while ((linea = brGenerador.readLine()) != null) {
			bwOrdenador.write(linea);
			System.out.println(linea);
			bwOrdenador.newLine();
		}
		System.out.println("Fin la salida del programa de generacion de impares");
		
		bwOrdenador.flush();
		bwOrdenador.close();
		
		BufferedReader brOrdenador = new BufferedReader(new InputStreamReader(pOrdenador.getInputStream()));
		
		int valorSalidaOrdenador = pOrdenador.waitFor();
		
		System.out.println("Valor de Salida programa 2: " + valorSalidaOrdenador);
		System.out.println("Salida ordenada del segundo programa: ");
		while ((linea = brOrdenador.readLine()) != null) {
			System.out.println(linea);
		}
		System.out.println("Fin ordenada del segundo programa");
		
		System.out.println("FIN DEL PROGRAMA");
	}

}
