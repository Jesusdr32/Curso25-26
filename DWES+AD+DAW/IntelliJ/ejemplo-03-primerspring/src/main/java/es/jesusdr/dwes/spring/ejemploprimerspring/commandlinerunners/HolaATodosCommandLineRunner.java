package es.jesusdr.dwes.spring.ejemploprimerspring.commandlinerunners;

import es.jesusdr.dwes.spring.ejemploprimerspring.services.TestServiceImpl;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(1)
public class HolaATodosCommandLineRunner implements CommandLineRunner {

    private final TestServiceImpl testService;

    public HolaATodosCommandLineRunner(TestServiceImpl testService) {
        this.testService = testService;
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Hola a todos");

        testService.hacerAlgo();
    }
}
