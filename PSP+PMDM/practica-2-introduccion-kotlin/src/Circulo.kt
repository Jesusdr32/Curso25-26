import kotlin.math.pow

class Circulo (nombre:String, var radio:Double) : Forma (nombre, TipoForma.circulo), Calcular{
    override fun area(): Double = Math.PI * radio.pow(2.0)

    override fun toString() : String {
        return super.toString() + " que su area es ${area()}"
    }
}