/* dataprovincias
  {
    id: "AL",
    nombre: "Almería",
    comunidad: "Andalucía",
    hab_mil: 689,
    x: 408,
    y: 375,
  },
*/

function numAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarPib(poblacion) {
  const pib = [];

  //Año 1 -> entre 8% y 12% de la población
  const porcentajeInicial = numAleatorio(8, 12) / 100;
  let valorAnual = Math.floor(poblacion * porcentajeInicial);

  pib.push(valorAnual);

  // Siguientes 3 años con crecimiento progresivo
  for (let i = 1; i < 4; i ++) {
    const crecimiento = numAleatorio(2, 5) / 100;
    valorAnual = Math.floor(valorAnual * (1 + crecimiento));

    pib.push(valorAnual);
  }

  return pib;
}

let dataprov = dataprovincias.map(function(e) {

  const km2 = numAleatorio(2000, 30000);

  return {
    ...e,

    km2: km2,

    pib: generarPib(e.hab_mil),
  };

});

const REGISTRO_REJILLA = 20;

const tableheaders = [
  "PROVINCIA",
  "COMUNIDAD AUTÓNOMA",
  "HABITANTES (miles)",
  "SUPERFICIE",
  "DENSIDAD",
];

// cont es el bloque div donde se crea el desplegable con la lista
function crearSelectComunidades(lista, cont) {

}

// cont es el contenedor donde se genera la tabla con la lista de provincias
function escribirTabla(listaprov, cont) {
  
}

// rejilla
function mostrarRejilla(cont) {
  cont = innerHTML = "";
  const rejilla = document.createElement("div");
  rejilla.className = "panel";

  dataprov.slice(0, REGISTRO_REJILLA).forEach(e => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";

    const nombre = document.createElement("h3");
    const comunidad = document.createElement("p");
    const detalle = document.createElement("button");

    nombre.textContent = `${e.nombre}`;
    comunidad.textContent = `${e.comunidad}`;
    detalle.textContent = "Ver detalle";

    detalle.addEventListener("click", function() {
      mostrarDetalle(e.id);
    });

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(comunidad);
    tarjeta.appendChild(detalle);
    
    rejilla.appendChild(tarjeta);
  });

  cont.appendChild(rejilla);
}

// mostrar detalle
function mostrarDetalle(id) {
  const elemento = dataprov.find(e => e.id === id);
  const detalle = document.getElementById("detalle");

  detalle.innerHTML = `
    <ul>
      <li><strong>Provincia:</strong> ${elemento.nombre}</li>
      <li><strong>Comunidad autónoma:</strong> ${elemento.comunidad}</li>
      <li><strong>Habitantes (miles):</strong> ${elemento.hab_mil}</li>
      <li><strong>Superficie:</strong> ${elemento.km2}</li>
      <li><strong>Densidad:</strong> ${elemento.pib}</li>
    </ul>`;


}
