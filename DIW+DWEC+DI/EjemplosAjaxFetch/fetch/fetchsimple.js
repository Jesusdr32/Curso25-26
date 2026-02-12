"use strict";

function obtenerTexto(resp) {
  console.log("obtenerTexto.resp:" + resp);
  let textojson = JSON.stringify(resp);
  console.log("obtenerTexto.textojson:" + textojson);
  return textojson;
}

function escribir(texto) {
  document.getElementById("capa").innerHTML = texto;
}

function fajax(parametro) {
  switch (parametro) {
    case "txt":
      fetch("https://pokeapi.co/api/v2/pokemon/kakuna")
        .then((response) => {
          console.log("OK");
          console.log(response);
          response.text().then(obtenerTexto).then(escribir);
        })
        .catch((error) => {
          console.log("Error en fetch:" + error);
        });
      break;
    case "json":
      fetch("https://pokeapi.co/api/v2/pokemon/kakuna")
        .then((response) => {
          console.log("OK");
          console.log(response);
          response.json().then(obtenerTexto).then(escribir);
        })
        .catch((error) => {
          console.log("Error en fetch:" + error);
        });
      break;

    default:
      alert("parámetro inválido en la llamada");
      break;
  }
}
