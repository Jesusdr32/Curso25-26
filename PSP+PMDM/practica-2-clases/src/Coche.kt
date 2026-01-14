class Coche (marca:String, precio:Double) : Vehiculo (marca, precio), Conducir {
    override fun conducir(direccion: String) {
        println("girando hacia $direccion")
    }

}