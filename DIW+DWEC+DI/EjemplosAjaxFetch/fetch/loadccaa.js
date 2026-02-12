let listaCCAA = [];

let listaProv = [];

let txtListaCCAA, txtListaProv;

function crearListaComunidades(texto) {
  let txtListaCCAA = texto;
  console.log("crearListaComunidades.txtListaCCAA = " + txtListaCCAA);

  let arrCCAA = texto.split("\n");

  arrCCAA.forEach((com, i) => {
    if (i != 0) {
      let valores = com.split(",");
      let objcom = { codigo: valores[0], nombre: valores[1] };
      listaCCAA.push(objcom);
    }
  });
  console.log("crearListaComunidades.listaCCAA = " + listaCCAA);
}

function crearListaProvincias(texto) {
  let txtListaProv = texto;
  console.log("crearListaProvincias.txtListaCCAA = " + txtListaProv);

  let arrProv = texto.split("\n");
  let lprov = [];

  arrProv.forEach((com, i) => {
    if (i != 0) {
      let valores = com.split(",");
      let objcom = { codigo: valores[0], nombre: valores[1] };
      lprov.push(objcom);
    }
  });
  console.log("crearListaProvincias.lprov = " + lprov);
  return lprov;
}

async function loadCCAA() {
  fetch("datos_ejemplos/ccaa/csv/ccaa.csv")
    .then((response) => response.text())
    .then((texto) => crearListaComunidades(texto))
    .catch((err) => console.log(err));
}

async function loadFileProv(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error al cargar el archivo: ${response.statusText}`);
    }
    const texto = await response.text(); // Espera a que el texto esté listo
    listaProv = crearListaProvincias(texto); // Procesa el texto
    return listaProv; // Devuelve el texto si necesitas usarlo en otro lugar
  } catch (err) {
    console.error("Error en loadFileProv:", err);
    throw err; // Relanza el error si es necesario manejarlo más arriba
  }
}

async function loadProvincias(cod) {
  console.log("loadProvincias.cod:" + cod);

  let rutafich;
  switch (cod) {
    case "01":
      rutafich = "datos_ejemplos/ccaa/csv/andalucia.csv";
      break;
    case "07":
      rutafich = "datos_ejemplos/ccaa/csv/castillaleon.csv";
      break;
    case "08":
      rutafich = "datos_ejemplos/ccaa/csv/castillalamancha.csv";
      break;
    case "13":
      rutafich = "datos_ejemplos/ccaa/csv/madrid.csv";
      break;

    default:
      alert("Esa comunidad no tiene datos");
      break;
  }

  await loadFileProv(rutafich);
}

window.onload = loadCCAA;
