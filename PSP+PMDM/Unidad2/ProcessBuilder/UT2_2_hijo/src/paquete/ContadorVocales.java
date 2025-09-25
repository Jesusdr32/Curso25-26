
package paquete;

import java.io.IOException;
import java.util.Scanner;

public class ContadorVocales {

	public static void main(String[] args) throws IOException, InterruptedException {
		Scanner sc = new Scanner(System.in);
		int acum = 0;
		String frase;
		
		try {
			frase = sc.nextLine();
			if (frase.length() > 3) {
				for (int i = 0; i < frase.length(); i ++) {
					if (frase.toUpperCase().charAt(i) == 'A' || frase.toUpperCase().charAt(i) == 'E' || frase.toUpperCase().charAt(i) == 'I' || frase.toUpperCase().charAt(i) == 'O' || frase.toUpperCase().charAt(i) == 'U') 
						acum ++;
				}
				System.out.println("La frase tiene " + acum + " vocales");
			} else {
				System.out.println("La frase tiene tres o menos letras");
			}
			System.exit(0);
		} catch (Exception e) {
			e.printStackTrace();
			System.exit(-1);
		}
		sc.close();
	}

}
