package es.jesusdr.dwes.spring.ejemploprimerspring.commandlinerunners;

import es.jesusdr.dwes.spring.ejemploprimerspring.services.TestServiceImpl;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(2)
public class AdiosATodosCommandLineRunner implements CommandLineRunner {
    private final TestServiceImpl testService;

    public AdiosATodosCommandLineRunner(TestServiceImpl testService) {
        this.testService = testService;
    }

    @Override
    public void run(String ... args) throws Exception {
        System.out.println("Adios a todos");

        testService.hacerAlgo();
    }
}
