const lienzo = document.getElementById("canvas");

let contenido;

async function leeFichero(tipofichero) {
  let resp;
  switch (tipofichero) {
    case "json":
      resp = await leeFicheroJson();
      console.log("leeFichero:" + resp);
      break;
    case "csv":
      leeFicheroCSV();
      break;

    default:
      resp = "";
      break;
  }

  return resp;
}

async function escribeContenido(tipo) {
  contenido = await leeFichero(tipo);
  lienzo.innerText = contenido;
}
