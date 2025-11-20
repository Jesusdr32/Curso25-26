package es.jesusdr.dwes.ejercicios.ejercicio0203inyecciondependenciasspring.commandlinerunner;

import es.jesusdr.dwes.ejercicios.ejercicio0203inyecciondependenciasspring.services.MessageService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(3)
public class ProcesoC implements CommandLineRunner {
    private final MessageService messageService;

    public ProcesoC(MessageService messageService) {
        this.messageService = messageService;
    }

    @Override
    public void run(String... args) throws Exception {
        messageService.showMessage(this.getClass().getSimpleName());
    }
}
