open class Vehiculo (marca:String, numRuedas:Int, precio:Double) {
    var marca:String
    var numRuedas: Int
    var precio: Double
    init {
        this.marca = marca
        this.numRuedas = numRuedas
        this.precio = precio
        println("estamos construyendo un vehiculo de " + marca)
    }
    constructor(marca:String, precio:Double) : this(marca, 4, precio) {
    }
    companion object {
        fun llamarGrua() {
            println("Vehiculo averiado: llamando a la grua")
        }
    }
}