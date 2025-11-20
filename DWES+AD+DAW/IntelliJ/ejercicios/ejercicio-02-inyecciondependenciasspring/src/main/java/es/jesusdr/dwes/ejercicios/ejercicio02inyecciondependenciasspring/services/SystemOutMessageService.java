package es.jesusdr.dwes.ejercicios.ejercicio0203inyecciondependenciasspring.services;

import org.springframework.stereotype.Component;

@Component
public class SystemOutMessageService implements MessageService{
    @Override
    public void showMessage(String message) {
        System.out.println(message);
    }
}
