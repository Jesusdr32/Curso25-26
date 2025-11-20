package es.jesusdr.dwes.ejercicios.ejercicio03inyecciondependenciasspring.commandlinerunner;

import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(1)
public class ProcesoA implements CommandLineRunner {

    private final es.jesusdr.dwes.ejercicios.ejercicio03inyecciondependenciasspring.services.MessageService messageService;

    public ProcesoA(es.jesusdr.dwes.ejercicios.ejercicio03inyecciondependenciasspring.services.MessageService messageService) {
        this.messageService = messageService;
    }

    @Override
    public void run(String... args) throws Exception {
        messageService.showMessage(this.getClass().getSimpleName());
    }
}
