package ejercicio3

import kotlin.random.Random

class Revolver (var posicionBala:Int, var posicionTambor:Int) {
    fun disparar(): Boolean {
        val exito = (posicionBala == posicionTambor)

        if (posicionTambor == 6) {
            posicionTambor = 1
        }
        else {
            this.posicionTambor ++
        }
        return exito
    }

    fun colocarBalaYGirarTambor() {
        this.posicionBala = Random.nextInt(1,7)
        this.posicionBala = Random.nextInt(1,7)
    }

    override fun toString() : String {
        return "Revolver(Bala en: $posicionBala, Tambor en: $posicionTambor)"
    }
}