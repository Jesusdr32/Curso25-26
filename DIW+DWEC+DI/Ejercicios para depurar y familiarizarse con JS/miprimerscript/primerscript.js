// Rellenar con textos aleatorios
const mitexto = "Hola, mundo";

// Rellenar con números aleatorios
const misnumeros = [1, 2, 3, 4];

// Rellenar para poner html
function escribirTexto() {
  document.writeln(mitexto);
}

// Rellenar con un bucle
function escribirNumeros() {
  document.writeln(misnumeros);
}

// Una vez hecho lo anterior, rellenar en en div
const milienzo = document.getElementById("lienzo");
milienzo.style.backgroundColor = "cyan";
milienzo.innerText = mitexto;

// Para completar con las instrucciones
function rellenarLienzo() {}
