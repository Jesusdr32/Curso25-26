package paquete2;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Scanner;

public class LlamarCalculadora {

	public static void main(String[] args) throws IOException, InterruptedException {
		Scanner sc = new Scanner(System.in);
		
		File directorio = new File("C:\\Users\\jesus\\Desktop\\REPOSTORIOS LOCALES\\Curso25-26\\PSP+PMDM\\RepasoExamen\\PracticaMultiprocesosII\\bin");
		
		ProcessBuilder pb = new ProcessBuilder("java", "paquete2.Calculadora");
		pb.directory(directorio);
		
		Process p = pb.start();
		
		BufferedReader br = new BufferedReader(new InputStreamReader(p.getInputStream()));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(p.getOutputStream()));
		
		System.out.println("Escribir el argumento aqui: ");
		String argumento;
		
		do {
			argumento = sc.nextLine();
			argumento += "\n";
			
			bw.write(argumento);
			bw.flush();
		} while(!argumento.contains("*"));
		
		int valorSalida = 99;
		
		try {
			valorSalida = p.waitFor();
			
			if (valorSalida == 0) {
				System.out.println("Valor de salida: " + valorSalida);
				
				System.out.println(br.readLine());
			}
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		bw.close();
		br.close();
		sc.close();
	}
}
