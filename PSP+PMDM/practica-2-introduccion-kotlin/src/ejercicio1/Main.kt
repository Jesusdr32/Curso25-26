package ejercicio1

import ejercicio1.Plano
import ejercicio1.Triangulo

fun main () {
    var triangulo = Triangulo("ejercicio1.Triangulo", 3.0, 4.5)
    var cuadrado = Cuadrado("ejercicio1.Cuadrado", 5.6)
    var circulo = Circulo("ejercicio1.Circulo", 12.3)
    var plano = Plano("ejercicio1.Plano")
    println(triangulo.toString())
    println(cuadrado.toString())
    println(circulo.toString())
    println(plano.toString())
}