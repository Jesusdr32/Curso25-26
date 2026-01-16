package ejercicio3

import kotlin.random.Random

class Revolver (var posicionBala:Int, var posicionTambor:Int) {
    fun disparar() {
        var respuesta:String
        this.posicionTambor ++
        if (this.posicionBala == this.posicionTambor)
            respuesta = "PUUUUUUUUUUMMMMMM"
        else {}
    }

    fun colocarBalaYGirarTambor() {
        this.posicionBala = Random.nextInt(1,7)
        this.posicionBala = Random.nextInt(1,7)
    }
}