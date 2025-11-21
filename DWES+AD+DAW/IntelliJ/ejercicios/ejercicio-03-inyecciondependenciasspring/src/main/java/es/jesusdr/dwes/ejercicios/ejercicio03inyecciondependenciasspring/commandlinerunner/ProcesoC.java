package es.jesusdr.dwes.ejercicios.ejercicio03inyecciondependenciasspring.commandlinerunner;

import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(3)
public class ProcesoC implements CommandLineRunner {

    private final es.jesusdr.dwes.ejercicios.ejercicio03inyecciondependenciasspring.services.MessageService messageService;

    public ProcesoC(es.jesusdr.dwes.ejercicios.ejercicio03inyecciondependenciasspring.services.MessageService messageService) {
        this.messageService = messageService;
    }

    @Override
    public void run(String... args) throws Exception {
        messageService.showMessage(this.getClass().getSimpleName());
    }
}
