class Triangulo (nombre:String, var base:Double, var altura:Double) : Forma (nombre, TipoForma.triangulo), Calcular {
    override fun area(): Double = base * altura

    override fun toString() : String {
        return super<Forma>.toString() + "y su area es ${area()}"
    }
}