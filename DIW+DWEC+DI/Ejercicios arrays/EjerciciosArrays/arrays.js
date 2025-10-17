function Ejercicio1() {
    let num = [15, 3, 7, 22, 10];
    num.sort((a, b) => a - b);
    document.getElementById("arrayOrdenadoNum").textContent = num.join(", ");
    
}

function Ejercicio2() {
    let palabras = ['casa', 'árbol', 'sol', 'perro', 'gato'];
    let nuevoPalabras = palabras.filter(palabra => palabra.length > 4);
    document.getElementById("arrayFiltradoLetras").textContent = nuevoPalabras.join(", ");
}

function Ejercicio3() {
    let precios = [25.99, 10.5, 5.99, 100, 1.5];
    let doblePrecios = precios.map(precio => precio * 2);
    document.getElementById("arrayMapeadoDuplicado").textContent = doblePrecios.join(", ");
}

function Ejercicio4() {
    let numeros = [1, 7, 15, 22, 5, 10];
    let nuevoNumeros = numeros.filter(num => num % 2 == 0);
    document.getElementById("arrayFiltradoPares").textContent = nuevoNumeros.join(", ");
}

function Ejercicio5() {
    
}