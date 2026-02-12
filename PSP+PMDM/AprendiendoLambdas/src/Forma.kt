class Forma {
    public fun calcularArea(base : Double, altura : Double, myFun : (Double, Double) -> Double) : Double {
        return myFun(base, altura)
    }

    public fun calcularAreaCirculo(radio : Double, myFun : (Double) -> Double) : Double {
        return myFun(radio)
    }
}