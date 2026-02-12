//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
fun main() {
    var miFuncion = fun (x : Double, y : Double) : Double {
        return x + y
    }
    println(miFuncion(5.0, 4.0))

    var miFuncion2 = {x : Double, y : Double ->
        println("Estoy sumando $x y $y")
        x +y
    }
    println(miFuncion2(5.0, 4.0))

    var miForma = Forma()

    println(miForma.calcularArea(5.0, 4.0)
    {
            x, y -> x * y
    })

    println(miForma.calcularAreaCirculo(6.7) {
        it * it * Math.PI
    })
}

