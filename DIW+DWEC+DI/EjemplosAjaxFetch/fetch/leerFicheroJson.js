/*
Esquema inicial
  fetch("datos_ejemplos/temperaturas.json")
    .then((response) => response.text())
    .then((resultText) => console.log(resultText))
    .catch((err) => console.log(err));
*/

function obtenerListaObjetos(respuesta) {
  let r = respuesta.text();
  console.log("obtenerListaObjetos:" + r);
  return r;
}

function obtenerTextoObjetos(texto) {
  console.log("obtenerTextoObjetos:" + texto);
  return texto;
}

async function leeFicheroJson() {
  return await fetch("datos_ejemplos/temperaturas.json")
    .then(obtenerListaObjetos)
    .then(obtenerTextoObjetos)
    .catch((err) => console.log(err));
}

function leeFicheroCSV(parametro) {}
