package servidor;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class Servidor_Jugar {
    static final int NUMERO_PUERTO = 6014; //Puerto

    public static void main(String[] args) throws IOException {
        //Asigno un puerto a mi aplicación e instancio un serversocket con el puerto
        //Así como un socket para cuando se conecta un cliente
        ServerSocket servidor =  new ServerSocket(NUMERO_PUERTO, 2);
        Socket clienteConectado = servidor.accept();
        Socket clienteConectado2 = servidor.accept();

        Boolean lbAcabado = false;
        Jugada jugadaCliente1;
        Jugada jugadaCliente2;

        try (//Creo flujo de entrada/salida del cliente 1
             ObjectInputStream oisCliente1 = new ObjectInputStream(clienteConectado.getInputStream());
             ObjectOutputStream oosCliente1 = new ObjectOutputStream(clienteConectado2.getOutputStream());

             //Creo flujo de entrada/salida del cliente 2
             ObjectInputStream oisCliente2 = new ObjectInputStream(clienteConectado2.getInputStream());
             ObjectOutputStream oosCliente2 = new ObjectOutputStream(clienteConectado2.getOutputStream())) {

            while(!lbAcabado){
                jugadaCliente1 = new Jugada();
                jugadaCliente2 = new Jugada();

                //Vamos a leer la jugada del cliente 1
                //leerJugada(jugadaCliente1,oisCliente1,oosCliente1);

                try {
                    jugadaCliente1 = (Jugada) oisCliente1.readObject();
                } catch (ClassNotFoundException e) {
                    e.printStackTrace();
                } catch (IOException e) {
                    e.printStackTrace();
                } //ahora lo leemos
                System.out.println("Leemos la jugada de " + jugadaCliente1.getNombre());
                System.out.println("Ha jugado: " + leerJugada(jugadaCliente1.getMiJugada()));
                System.out.println("**********************************************");

                //Vamos a leer la jugada del cliente 2
                try {
                    jugadaCliente2 = (Jugada) oisCliente2.readObject();
                } catch (ClassNotFoundException e) {
                    e.printStackTrace();
                } catch (IOException e) {
                    e.printStackTrace();
                }
                System.out.println("Leemos la jugada de " + jugadaCliente2.getNombre());
                System.out.println("Ha jugado: " + leerJugada(jugadaCliente2.getMiJugada()));
                System.out.println("**********************************************");

                //Vamos quien gana, para comprobarlo si ha ido bien entero sólo hace falta uno de los objetos
                comprobarResultado(jugadaCliente1, jugadaCliente2);
                //Actualizamos los datos del cliente 2

                //Tenemos que enviar el objeto a cada jugador y le indicamos quien ha ganado
                oosCliente1.writeObject(jugadaCliente1); //Enviando objeto
                oosCliente2.writeObject(jugadaCliente2); //Enviando objeto

                if (jugadaCliente1.getWClienteYo() == 3 || jugadaCliente1.getWClienteOtro() == 3) {
                    System.out.println("FIN DE LA PARTIDA");
                    lbAcabado = true;
                }
            }
        }
        //Cerrar streams y sockets
        clienteConectado.close();
        clienteConectado2.close();
        servidor.close();
    }

    public static String leerJugada(int jugadaJugador){
        String respuesta = null;

        switch (jugadaJugador){
            case 1:
                respuesta = "PIEDRA";
                break;
            case 2:
                respuesta = "PAPEL";
                break;
            case 3:
                respuesta = "TIJERAS";
                break;
        }
        return respuesta;
    }

    public static void comprobarResultado(Jugada jugador1, Jugada jugador2) {
        int suma, contadorCli1 = 0,  contadorCli2 = 0;

        int jugada1 = jugador1.getMiJugada();
        int jugada2 = jugador2.getMiJugada();
        int resta = jugada1 -  jugada2;

        switch(resta) {
            case 0:
                //Empatan
                System.out.println("No ha ganado ninguno de los jugadores");
                jugador1.setGanoTurno(0);
                jugador2.setGanoTurno(0);
                break;
            case 1, -2:
                //gana jugador 1
                contadorCli1 = jugador1.getWClienteYo();
                contadorCli1 ++;
                jugador1.setWClienteYo(contadorCli1);
                jugador2.setWClienteOtro(contadorCli1);
                System.out.println("Ha ganado jugador " + jugador1.getNombre());
                System.out.println("VAMOS: " + jugador1.getNombre() + ": " + contadorCli1 + " - " + jugador2.getNombre() + ": " + jugador2.getWClienteYo());
                System.out.println("*******************************");
                jugador1.setGanoTurno(1);
                jugador2.setGanoTurno(-1);
                break;
            case -1, 2:
                //gana jugador 2
                contadorCli2 = jugador2.getWClienteYo();
                contadorCli2 ++;
                jugador2.setWClienteYo(contadorCli2);
                jugador1.setWClienteOtro(contadorCli2);
                System.out.println("Ha ganado jugador " + jugador2.getNombre());
                System.out.println("Vamos: " + jugador1.getNombre() + ": " + jugador1.getWClienteYo() + " - " + jugador2.getWClienteYo() + " - " + jugador2.getNombre() + ": " + contadorCli2);
                System.out.println("*****************************");
                jugador1.setGanoTurno(-1);
                jugador2.setGanoTurno(1);
                break;
        }
        return;
    }
}
