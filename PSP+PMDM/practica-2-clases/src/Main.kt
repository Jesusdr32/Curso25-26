fun main() {
    var miVehiculo = Vehiculo("BMW", 4, 35000.0)
    println(miVehiculo.marca)
    Vehiculo.llamarGrua()

    println(miVehiculo.toString())

    var miVehiculo2 = Vehiculo2("Ford", 4, 35000.0)
    println(miVehiculo2.marca)
    Vehiculo.llamarGrua()

    println(miVehiculo2.toString())

    var miVehiculo3 = Coche("Fiat", 35000.0)
    println(miVehiculo3.marca)
    Vehiculo.llamarGrua()

    println(miVehiculo3.toString())

    miVehiculo3.conducir("derecha")
}
