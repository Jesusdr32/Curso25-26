package paquete;

import java.util.concurrent.Callable;
import java.util.concurrent.ThreadLocalRandom;

public class Balsa implements Callable<Integer> {
    private final int id;
    private final Isla isla;
    private final int capacidad = 15;
    private int rescatados = 0;

    public Balsa(int id, Isla isla) {
        this.id = id;
        this.isla = isla;
    }

    @Override
    public Integer call() {
        try {
            while (true) {
                synchronized (isla) {
                    if (isla.getNaufragosRestantes() <= 0) break;
                }

                // Esperar turno para entrar a la playa
                isla.entrarPlaya(id);

                // Comprobar si quedan al entrar
                if (isla.getNaufragosRestantes() <= 0) {
                    isla.salirPlaya(id);
                    break;
                }

                // Cargar náufragos
                int aCargar = isla.asignarNaufragos(capacidad);
                if (aCargar == 0) {
                    isla.salirPlaya(id);
                    break;
                }

                long tiempoCarga = ThreadLocalRandom.current().nextLong(2000, 3000 + 1);
                Thread.sleep(tiempoCarga);

                isla.salirPlaya(id);

                // Viaje ida y vuelta
                long tiempoViaje = ThreadLocalRandom.current().nextLong(1800, 2000 + 1);
                Thread.sleep(tiempoViaje);

                rescatados += aCargar;
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        return rescatados;
    }
}
