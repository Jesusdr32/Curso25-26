package ejercicio2

fun main() {
    val personas = mutableListOf<Persona>()
    do {
        println("Indicame si quieres introducir más datos de personas")
        val respuesta = readLine()
        if (respuesta.equals("S")) {
            println("Dime el nombre de la persona: ")
            val nombre = readlnOrNull()!!
            println("Dime el peso de la persona (en Kg): ")
            val peso = readlnOrNull()!!.toDouble()
            println("Dime la altura de la persona (en metros): ")
            val altura = readlnOrNull()!!.toDouble()
            personas.add(Persona(nombre, peso, altura))
        }
    } while (respuesta.equals("S"))

    for (persona in personas) {
        println(persona.toString())
    }
}