function Ejercicio1reemplazarOcurrencias() {
    let texto = document.getElementById("texto").value;
    let ocurrencia = document.getElementById("ocurrencia").value;
    let sustitucion = document.getElementById("sustitucion").value;
    texto = texto.toLowerCase().replace(ocurrencia, sustitucion)
    let respuesta_texto = document.getElementById("texto_modificado").textContent = texto;
}

function Ejercicio1reemplazarPrimeraOcurrencia() {

}

function Ejercicio1contarOcurrenciasSustituidas() {

}

function Ejercicio1preguntarReemplazo() {
    
}