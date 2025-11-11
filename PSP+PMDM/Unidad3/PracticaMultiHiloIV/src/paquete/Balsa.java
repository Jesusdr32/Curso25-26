package paquete;

import java.util.concurrent.Semaphore;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.TimeUnit;

public class Balsa implements Runnable {
    private final int id;
    private final Isla isla;
    private int rescatados = 0;
    private static final int CAPACIDAD = 15;
    
    public Balsa(int id, Isla isla) {
    	this.id = id;
    	this.isla = isla;
    }
    
    @Override
    public void run() {
    	Thread.currentThread().setName("Balsa-" + id);
    	
    	if (id == 1) {
    		Thread.currentThread().setPriority(Thread.MAX_PRIORITY);
    	} else {
    		Thread.currentThread().setPriority(Thread.NORM_PRIORITY);
    	}
    	
    	Semaphore playa = isla.getPlaya();
    	
    	while (true) {
    		try {
    			if (id == 1) {
    				playa.acquire();
    			} else {
    				if (!playa.tryAcquire(300, TimeUnit.MILLISECONDS)) {
    					Thread.yield();
    					continue;
    				}
    			}
    			
    			if (isla.getNaufragosRestantes() <= 0) {
    				playa.release();
    				break;
    			}
    			
    			int rescate = isla.rescatarNaufragos(CAPACIDAD);
    			if (rescate == 0) {
    				playa.release();
    				break;
    			}
    			
    			rescatados += rescate;
    			
    			System.out.printf("Balsa %d rescata %d náufragos. Quedan: %d %n", id, rescate, isla.getNaufragosRestantes());
    			
    			Thread.sleep(ThreadLocalRandom.current().nextInt(2000, 3001));
    			
    			Thread.sleep(ThreadLocalRandom.current().nextInt(1800, 2001));
    			
    			playa.release();
    		} catch (InterruptedException e) {
    			e.printStackTrace();
    		}
    	}
    	
    	System.out.printf("Balsa %d ha rescatado un total de %d náufragos. %n", id, rescatados);
    }
}
