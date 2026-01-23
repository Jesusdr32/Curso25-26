package ejercicio3

fun main() {
    val revolver = Revolver(0, 0)
    revolver.colocarBalaYGirarTambor()
    println("Revolver cargado y tambor girado.")

    val jugadores = mutableListOf<Jugador>()

    println("Dime cuantos jugadores van a jugar (entre 2 y 6):")
    var numJugadores = readLine()!!.toInt()

    while (numJugadores !in 2..6) {
        println("Número incorrecto. Debe ser entre 2 y 6 jugadores.")
        numJugadores = readLine()!!.toInt()
    }

    for (i in 1..numJugadores) {
        println("Dime el nombre del jugador $i")
        val nombre = readln()
        jugadores.add(Jugador(nombre))
    }

    var juegoTerminado = false

    while (!juegoTerminado) {
        for (jugador in jugadores) {
            if (jugador.vivo) {
                println("\n**********************")
                println("Le toca el turno al jugador ${jugador.nombre}")
                println("¿Quieres jugar? (S/N, aviso todo lo que NO sea S, será N")
                var respuesta = readln().uppercase()

                if (respuesta == "S") {
                    println("Bien hecho. Eres un/una valiente...")

                    val murio = revolver.disparar()
                    if (murio) {
                        println("PUUUUUUUUUUUUUUUUMMMMMMMMMMMM")
                        println("Una pena. ${jugador.nombre} ha muerto. RIP")
                        jugador.vivo = false

                        println("Metemos otra bala en el tambor y volvemos a girarlo.")
                        revolver.colocarBalaYGirarTambor()
                    } else {
                        println("CLIIIICK")
                        println("Wow. ${jugador.nombre} ha esquivado la bala.")
                    }
                } else {
                    println("${jugador.nombre} ha decidido abandonar. ¡Gallina!")
                    jugador.vivo = false
                }
                val vivos = jugadores.count { it.vivo }
                if (vivos == 1) {
                    juegoTerminado = true
                    break
                }
                if (vivos == 0) {
                    println("Todos han muerto o abandonado. Nadie gana.")
                    juegoTerminado = true
                    break
                }
            }
        }
    }
    val ganador = jugadores.find { it.vivo }
    if (ganador != null) {
        println("\nSe acabó la partida")
        println("Sólo ha quedado viv@ ${ganador.nombre}")
    }
}