"use strict";

function fajax(parametro) {
  // fetch("https://pokeapi.co/api/v2/pokemon/kakuna")
  //    fetch("dwtest-02.norwayeast.cloudapp.azure.com/mydata/empleadosda2.json")
  fetch("petnames.json")
    .then((response) => {
      console.log("OK");
      console.log(response);
      return response.json(); // devolvemos la promesa que contiene el JSON
    })
    .then((data) => {
      console.log(data); // aquí ya es un array de objetos
      document.getElementById("capa").innerHTML = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      console.error("Error cargando el JSON:", error);
    });
}
