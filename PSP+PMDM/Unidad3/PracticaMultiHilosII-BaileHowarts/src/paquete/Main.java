package paquete;

import java.util.*;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Main {
    public static void main(String[] args) {
        PistaBaile pista = new PistaBaile();

        ArrayList<Bailarin> chicas = new ArrayList<>(Arrays.asList(
        		new Bailarin("Hermione Granger", "Gryffindor", pista),
        		new Bailarin("Pansy Parkinson", "Slytherin", pista),
        		new Bailarin("Tamsin Applebee", "Hufflepuff", pista),
        		new Bailarin("Luna Lovewood", "Ravenclaw", pista)));

        ExecutorService executor = Executors.newSingleThreadExecutor();
        
        for (Bailarin chica : chicas ) {
        	executor.submit(chica);
        }
        
        executor.submit(new DirectorBaile(pista));
        
        executor.shutdown();
    }
}

