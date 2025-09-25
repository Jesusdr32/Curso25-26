package paquete;

import java.io.BufferedWriter;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.util.Scanner;

public class EjecutarUnProgramaJavaDesdeOtro {

	public static void main(String[] args) throws IOException, InterruptedException {
		Scanner sc = new Scanner(System.in);
		System.out.println("Escribe una frase de más de tres caracteres");
		
		String respuesta = sc.nextLine();
		
		File directorio = new File("C:\\Users\\Vespertino\\Desktop\\DA2D1E\\PSP+PMDM\\Unidad2\\ProcessBuilder\\UT2_2_hijo\\bin");
		
		ProcessBuilder pb = new ProcessBuilder("java", "paquete.ContadorVocales");
		
		pb.directory(directorio);
		
		Process p = pb.start();
		
		respuesta = respuesta + "\n";
		
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(p.getOutputStream()));
		
		bw.write(respuesta);
		
		bw.flush();
		
		int valorSalida = 99;
		
		try {
			valorSalida = p.waitFor();
			
			System.out.println("Valor de salida: " + valorSalida);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		if (valorSalida == 0) {
			try {
				InputStream is = p.getInputStream();
				
				Scanner sc2 = new Scanner(is);
				
				String salida = sc2.nextLine();
				
				System.out.println(salida);
				
				if (sc2.hasNext()) {
					salida = sc2.nextLine();
					System.out.println(salida);
				}
				sc2.close();
				is.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		bw.close();
		sc.close();
	}
	

}
