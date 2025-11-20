package es.jesusdr.dwes.spring.ejemploprimerspring.services;

import org.springframework.stereotype.Component;

@Component
public class TestServiceImpl implements TestService {
    private int contadorLlamadas = 0;
    @Override
    public void hacerAlgo(){
        contadorLlamadas++;
        System.out.printf("Soy la clase TestService y estoy en la llamada %d a hacerAlgo()%n", contadorLlamadas);
    }
}
