package cliente;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.Scanner;

public class Cliente_Jugar {
    static final String HOST = "localhost";
    static final int PUERTO = 6014; //puerto remoto

    public static void main(String[] args) throws UnknownHostException, IOException, ClassNotFoundException {
        Scanner sc = new Scanner(System.in);
        Socket cliente = new Socket(HOST, PUERTO);

        Boolean lbAcabado = false;
        Jugada miJugada = new Jugada();
        int juego;

        System.out.println("Dime tu nombre: ");
        String nombre = sc.nextLine();

        try (//Creo flujo de salida al servidor
             //Se obtiene un stream para escribir objetos
             ObjectOutputStream oos = new ObjectOutputStream(cliente.getOutputStream());
             //Creo flujo de entrada del servidor
             ObjectInputStream ois = new ObjectInputStream(cliente.getInputStream());) {
            while(!lbAcabado){
                System.out.println("¿Quieres 1 - PIEDRA / 2 - PAPEL / 3 - TIJERAS?");
                juego = sc.nextInt();
                miJugada.setNombre(nombre);
                miJugada.setMiJugada(juego);

                oos.writeObject(miJugada); //enviando objeto

                miJugada = (Jugada) ois.readObject(); //Recibo la jugada del servidor y como vamos

                switch (miJugada.getGanoTurno()) {
                    case 0:
                        System.out.println("Hemos EMPATADO en este turno");
                        break;
                    case 1:
                        System.out.println("He GANADO en este turno :-)");
                        break;
                    case -1:
                        System.out.println("HE PERDIDO en este turno :-(");
                        break;
                }
                System.out.println("Vamos YO: " + miJugada.getWClienteYo() + " el OTRO: " + miJugada.getWClienteOtro());

                if (miJugada.getWClienteYo() == 3 || miJugada.getWClienteOtro() == 3) {
                    lbAcabado = true;
                }
            }
        }
        System.out.println("FIN DE PARTIDA");
    } //main
}
