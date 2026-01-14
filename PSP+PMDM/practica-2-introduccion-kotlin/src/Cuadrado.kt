class Cuadrado (nombre:String, var lado:Double) : Forma (nombre, TipoForma.cuadrado), Calcular {
    override fun area(): Double = lado * lado

    override fun toString() : String {
        return super.toString() + " cuya area es ${area()}"
    }
}