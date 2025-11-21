const columnasVuelos = {
    vuelo: true,
    compañia: true, 
    origen: true,
    destino: true,
    precio: true
};

const tabla = document.getElementById("showtable");
const btnall = document.getElementById("btnall");
const vueloBuscado = document.getElementById("nvuelo"); 
const origen = document.getElementById("origen");
const destino = document.getElementById("destino");
const btnorden = document.getElementById("btnorden");
const flight = document.getElementById("flight");

const ciudades = {
    P: "Paris", 
    M: "Madrid",
    L: "Lisbon",
    R: "Rome",
    A: "Athens",
    D: "Dublin",
    B: "Berlin"
}

//Mostrar la tabla de la lista escogida
function renderizarTabla(lista) {
    const columnas = Object.keys(columnasVuelos).filter(c => columnasVuelos[c]);
    let html = "<table><tr>";
    columnas.forEach(c => html += `<th>${c}</th>`);
    html += "</tr>";
    
    lista.forEach(v => {
        html += "<tr onmouseenter=cambiarFondoEntrando(this) onmouseleave=cambiarFondoIrse(this)>";
        columnas.forEach(c => html += `<td>${v[c]}</td>`);
        html += "</tr>";
    });
    html += "</table>";
    tabla.innerHTML = html;
}

//Mostrar el vuelo buscado por su ID
vueloBuscado.addEventListener("keyup", () => {
    let idVuelo = vueloBuscado.value;
    if (listaVuelos.filter(v => v.vuelo.includes(idVuelo.toUpperCase())) != "") {
        renderizarTabla(listaVuelos.filter(v => v.vuelo.includes(idVuelo.toUpperCase())));
    } else {
        tabla.innerHTML = "<p>Ese vuelo no existe</p>"
    }
});

//Mostrar los primeros 20 vuelos
btnall.addEventListener("click", () => {
   renderizarTabla(listaVuelos.slice(0, 20));
});

//Mostrar los vuelos según su origen y destino
origen.addEventListener("change", origenDestino);
destino.addEventListener("change", origenDestino);

function origenDestino() {
    let lista = listaVuelos;
    if (origen.value) {
        lista = lista.filter(v => v.origen === ciudades[origen.value]);
    }
    if (destino.value) {
        lista = lista.filter(v => v.destino === ciudades[destino.value]);
    }
    renderizarTabla(lista);
}

//Mostrar los vuelos ordenados por precio descendente
btnorden.addEventListener("click", () => {
    let listaOrdenada = listaVuelos.slice().sort((a, b) => {
        if (a.precio > b.precio) return -1;
        if (a.precio < b.precio) return 1;
        return 0;
    });
    renderizarTabla(listaOrdenada.slice(0, 20));
});

function cambiarFondoEntrando(linea) {
    linea.style.backgroundColor = "rgb(111,126,155)";
}

function cambiarFondoIrse(linea) {
    linea.style.backgroundColor = "rgb(44,172,231)";
}
