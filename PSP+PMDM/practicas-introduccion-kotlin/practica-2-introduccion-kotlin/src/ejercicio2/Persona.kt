package ejercicio2

import kotlin.math.pow

class Persona (var nombre: String, var peso: Double, var altura: Double) {
    fun calcularIMC() = this.peso / this.altura.pow(2.0)

    fun valorarIMC() : String{
        val respuesta : String
        if (calcularIMC() < 20)
            respuesta = "Está por debajo de su peso ideal"
        else if (calcularIMC() in 20.0..25.0)
            respuesta = "Está en su peso ideal"
        else
            respuesta = "Está por encima de su peso ideal"
        return respuesta
    }

    override fun toString() : String {
        return "La persona $nombre tiene un IMC ${calcularIMC()} y eso implica que ${valorarIMC()}"
    }
}