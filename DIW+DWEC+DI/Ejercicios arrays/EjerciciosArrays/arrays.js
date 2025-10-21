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
    let animales = ['perro', 'gato', 'elefante', 'jirafa'];
    let animalesOrden = animales.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
    document.getElementById("arrayOrdenadoLetras").textContent = animalesOrden.join(", ");
}

function Ejercicio6() {
    let fechas = ['2023-05-10', '2022-12-01', '2024-02-20'];
    let fechasDate = fechas.map(a => new Date(a).toLocaleDateString('es-ES', {
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit'}));
    document.getElementById("arrayMapeadoDate").textContent = fechasDate.join('\n');
}

function Ejercicio7() {
    let nums = [8, 15, 4, 20, 10];
    let numsMayores = nums.filter(num => num > 10);
    document.getElementById("arrayFiltradoMayor").textContent = numsMayores.join(", ");
}

function Ejercicio8() {
    let objetos = [{nombre: 'Juan', edad: 25}, {nombre: 'Ana', edad: 30}, {nombre: 'Pedro', edad: 20}];
    let objetosOrden = objetos.sort((a, b) => a.edad - b.edad);
        document.getElementById("arrayOrdenadoEdad").textContent = objetosOrden.map(objeto => `${objeto.nombre} tiene ${objeto.edad} años`).join('\n');
}

function Ejercicio9() {
    let saludos = ['hola', 'adiós', 'buenos días'];
    let saludosMayusculas = saludos.map(a => a.toUpperCase());
    document.getElementById("arrayMapeadoMayus").textContent = saludosMayusculas.join(", ");
}

function Ejercicio10() {
    let libros = [{titulo: '1984', añoPublicacion:1949}, {titulo: 'Cien años de soledad', añoPublicacion: 1967}, {titulo: 'Matar a un ruiseñor', añoPublicacion: 1960}, {titulo: 'El gran Gatsby', añoPublicacion: 1925}];
    let librosAños = libros.filter(a => a.añoPublicacion < 2000);
    document.getElementById("arrayFiltradoLibros").textContent = librosAños.map(libro => `"${libro.titulo}" escrito en ${libro.añoPublicacion}`).join('\n');
}