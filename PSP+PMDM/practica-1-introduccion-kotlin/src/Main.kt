import java.util.Calendar

fun main() {
    println("Elige una de las siguientes opciones")
    println("1 - Saber si un día es laborable o fin de semana")
    println("2 - Divisibles entre 3")
    println("3 - Siguiente divisible entre 7")
    println("4 - Notas del aula")
    println("5 - Divisibles entre 11")
    println("6 - Calcula el precio del cine")

    println("Selecciona una de las opciones: ")
    val opcion = readLine()?.toIntOrNull()

    when(opcion) {
        1 -> laborableONo()
        2 -> divisible3()
        3 -> divisible7()
        4 -> notas()
        5 -> divisible11()
        6 -> precioCine()
        else -> println("Error: Opción inválida")
    }
}

fun laborableONo() {
    println("Dime el día: ")
    val dia = readLine()!!.toInt()
    println("Dime el mes: ")
    val mes = readLine()!!.toInt() - 1
    println("Dime el año: ")
    val anio = readLine()!!.toInt()

    val calendar = Calendar.getInstance()
    calendar.set(anio, mes, dia)
    val diaSemana : Int = calendar.get(Calendar.DAY_OF_WEEK)

    if (diaSemana == Calendar.SATURDAY || diaSemana == Calendar.SUNDAY) {
        println("El día elegido era NO laborable")
    } else {
        println("El día elegido era laborable")
    }
}

fun divisible3() {
    println("Dime el número del que debo partir:")
    val num = readLine()!!.toInt()

    for (i in num..num + 25) {
        if (i % 3 == 0) {
            println("El número $i es divisible entre 3")
        }
    }
}

fun divisible7() {
    println("Dime el número del que debo partir:")
    val num = readLine()!!.toInt()

    var siguiente = num + 1

    while (siguiente % 7 != 0) {
        siguiente ++
    }

    println("El número $siguiente es divisible entre 7")
}

fun notas() {
    println("¿Cuantos alumnos son?")
    val numAlumnos = readLine()!!.toInt()

    val notas = mutableListOf<Int>()

    for (i in 1..numAlumnos) {
        println("Dame la nota del alumno $i:")
        val nota = readLine()!!.toInt()
        notas.add(nota)
    }
    val media = notas.average()
    println("La media de las notas introducidas es: %.2f".format(media))

    println("Y estas son las notas por encima de la media:")
    for ((index, nota) in notas.withIndex()) {
        if (nota > media) {
            println("Alumno ${index + 1} con nota $nota, está por encima de la media")
        }
    }
}

fun divisible11() {
    println("Dame un número del que debo partir:")
    val numInicial = readLine()!!.toInt()
    println("Dime cuantos números a partir del anterior quieres que busque:")
    val rango = readLine()!!.toInt()

    var encontrados = false

    for (i in numInicial..numInicial + rango) {
        if (i % 11 == 0) {
            println("El número $i es divisible entre 11")
            encontrados = true
        }
    }
    if (!encontrados) {
        println("No hay ningún número divisible entre 11 con los datos que has dado")
    }
}

fun precioCine() {

}