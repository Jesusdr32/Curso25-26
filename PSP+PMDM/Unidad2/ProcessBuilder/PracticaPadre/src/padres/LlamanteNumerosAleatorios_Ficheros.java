package padres;

import java.io.File;
import java.io.IOException;

public class LlamanteNumerosAleatorios_Ficheros {

    public static void main(String[] args) throws IOException, InterruptedException {

        File fImpares = new File("impares.txt");
        File fOrden = new File("orden.txt");
        File fErrores = new File("errores.txt");

        ProcessBuilder pbGenerador = new ProcessBuilder("java", "-cp", "../PracticaHijos/bin", "hijos.GenerarNumerosAleatorios");
        ProcessBuilder pbOrdenador = new ProcessBuilder("java", "-cp", "../PracticaHijos/bin", "hijos.OrdenarNumerosAleatorios");

        pbGenerador.redirectOutput(fImpares);  
        pbGenerador.redirectError(fErrores); 
        
        pbOrdenador.redirectInput(fImpares);    
        pbOrdenador.redirectOutput(fOrden);     
        pbOrdenador.redirectError(fErrores);

        Process pGenerador = pbGenerador.start();
        int valorSalidaGenerador = pGenerador.waitFor();
        System.out.println("GenerarNumerosAleatorios finalizado con código: " + valorSalidaGenerador);    

        Process pOrdenador = pbOrdenador.start();
        int valorSalidaOrdenador = pOrdenador.waitFor();
        System.out.println("OrdenarNumerosAleatorios finalizado con código: " + valorSalidaOrdenador);

        System.out.println("\nFicheros generados correctamente:");
        System.out.println("-> Números impares: " + fImpares.getAbsolutePath());
        System.out.println("-> Números ordenados: " + fOrden.getAbsolutePath());
        System.out.println("-> Errores: " + fErrores.getAbsolutePath());
    }
}
