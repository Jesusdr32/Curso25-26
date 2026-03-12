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

const urlProvincias = "../src/data/provincias_es_B_800_incompleto.json";

const REGISTRO_REJILLA = 20;

let datosProvincias = [];

function numAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarPib(poblacion) {
  const pib = [];

  const porcentajeInicial = numAleatorio(8, 12) / 100;
  let valorAnual = Math.floor(poblacion * porcentajeInicial);

  pib.push(valorAnual);

  for (let i = 1; i < 4; i ++) {
    const crecimiento = numAleatorio(2, 5) / 100;
    valorAnual = Math.floor(valorAnual * (1 + crecimiento));

    pib.push(valorAnual);
  }

  return pib;
}

const tableheaders = [
  "PROVINCIA",
  "COMUNIDAD AUTÓNOMA",
  "HABITANTES (miles)",
  "SUPERFICIE",
  "DENSIDAD",
];

function cargarDatos() {
  const avisos = document.getElementById("avisos");
  avisos.style.display = "block";
  avisos.textContent = "Estamos cargando sus datos";

  fetch(urlProvincias).then(respuesta => respuesta.json()).then(datos => {
    datosProvincias = datos.map(p => ({
      ...p,
      km2: numAleatorio(2000, 30000),
      pib: generarPib(p.hab_mil)
    }));

    setTimeout(() => {
      avisos.textContent = "Datos cargados correctamente";
    }, 2000);

    setTimeout(() => {
      avisos.style.display = "none";
    }, 3000);

    crearSelectComunidades();
  });
}

// cont es el bloque div donde se crea el desplegable con la lista
function crearSelectComunidades() {
  const cont = document.getElementById("selcomunidad");
  cont.innerHTML = "";

  const select = document.createElement("select");

  const opcionTodas = document.createElement("option");
  opcionTodas.value = "todas";
  opcionTodas.textContent = "Todas las comunidades";
  select.appendChild(opcionTodas);

  const comunidades = [...new Set(datosProvincias.map(p => p.comunidad))];

  comunidades.forEach(c => {
    const opcion = document.createElement("opcion");
    opcion.value = c;
    opcion.textContent = c;
    select.appendChild(opcion);
  });

  select.addEventListener("change", function() {
    crearSelectProvincias(this.value);
  });

  cont.appendChild(select);
}

function crearSelectProvincias(comunidad) {
  const cont = document.getElementById("selprovincia");
  cont.innerHTML = "";

  const select = document.createElement("select");

  const opcionDefecto = document.createElement("option");
  opcionDefecto.textContent = "Seleccione provincia";
  opcionDefecto.value = "";
  select.appendChild(opcionDefecto);

  const filtradas = comunidad === "todas"
    ? datosProvincias
    : datosProvincias.filter(p => p.comunidad === comunidad);

  filtradas.forEach(p => {
    const opcion = document.createElement("option");
    opcion.value = p.id;
    opcion.textContent = p.nombre;
    select.appendChild(opcion);
  });

  select.addEventListener("change", function() {
    if (this.value !== "") {
      mostrarDetalle(this.value);
    }
  });

  cont.appendChild(select);
}

// cont es el contenedor donde se genera la tabla con la lista de provincias
function escribirTabla(listaprov, cont) {
  
}

// rejilla
function mostrarRejilla(cont, contDetalle) {
  cont.innerHTML = "";
  const rejilla = document.createElement("div");
  rejilla.className = "panel";

  dataprov.slice(0, REGISTRO_REJILLA).forEach(e => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "provincia provincia-color";

    const nombre = document.createElement("h3");
    nombre.className = "provincia-nombre";
    const comunidad = document.createElement("p");
    comunidad.className = "provincia-comunidad";
    const detalle = document.createElement("div");
    detalle.className = "boton ver-detalle";

    nombre.textContent = `${e.nombre}`;
    comunidad.textContent = `${e.comunidad}`;
    detalle.textContent = "Ver detalle";

    detalle.addEventListener("click", function() {
      mostrarDetalle(e.id, contDetalle);
    });

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(comunidad);
    tarjeta.appendChild(detalle);
    
    rejilla.appendChild(tarjeta);
  });

  cont.appendChild(rejilla);
}

// mostrar detalle
function mostrarDetalle(id ,cont) {
  const elemento = dataprov.find(e => e.id === id);

  cont.style.display = "block";

  cont.innerHTML = "";

  const nombre = document.createElement("h3");
  nombre.className = "detalle-provincia";
  const comunidad = document.createElement("p");
  comunidad.className = "detalle-provincia detalle-comunidad";
  const datos = document.createElement("div");
  datos.className = "detalle-provincia detalle-data";
  const km2 = document.createElement("p");
  km2.className = "detalle-provincia detalle-data-item detalle-num";
  const pib = document.createElement("p");
  pib.className = "detalle-provincia detalle-data-item detalle-num";
  const boton = document.createElement("div");
  boton.className = "detalle-boton";

  nombre.textContent = `${elemento.nombre}`;
  comunidad.textContent = `${elemento.comunidad}`;
  km2.textContent = `${elemento.km2} km2`;
  pib.textContent = `${elemento.pib} €`;
  boton.textContent = "Cerrar";

  cont.appendChild(nombre);
  cont.appendChild(comunidad);
  datos.appendChild(km2);
  datos.appendChild(pib);
  cont.appendChild(datos);
  cont.appendChild(boton);

  boton.addEventListener("click", function() {
    cont.style.display = "none";
  })
}
