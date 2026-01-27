let datosOriginales = [...exitos];
let datosFiltrados = [...exitos];

let paginaActual = 1;
const REGISTROS_POR_PAGINA = 15;
let vistaActual = "tabla";
let criterioOrden = "";

window.onload = () => {
    configurarEventos();
    renderizarTodo();
};

function configurarEventos() {

    document.getElementById("filtro-artista").addEventListener("input", () => {
        paginaActual = 1;
        renderizarTodo();
    });

    document.getElementById("filtro-cancion").addEventListener("input", () => {
        paginaActual = 1;
        renderizarTodo();
    });

    document.querySelectorAll("input[name='tipo-artista']").forEach(r =>
        r.addEventListener("change", () => {
            paginaActual = 1;
            renderizarTodo();
        })
    );

    document.getElementById("ordenar").addEventListener("change", e => {
        criterioOrden = e.target.value;
        renderizarTodo();
    });

    document.getElementById("vista").addEventListener("change", e => {
        vistaActual = e.target.value;
        renderizarTodo();
    });

    document.getElementById("btn-listar").onclick = listarSeleccionados;
    document.getElementById("btn-borrar").onclick = borrarSeleccionados;

    document.querySelectorAll("#paginacion button").forEach(b =>
        b.onclick = e => {
            paginaActual = parseInt(e.target.textContent);
            renderizarTodo();
        }
    );
}

function renderizarTodo() {
    aplicarFiltrosYOrden();
    if (vistaActual === "tabla") {
        generarTabla();
    } else {
        generarRejilla();
    }
}

/* ===== FILTROS Y ORDEN ===== */
function aplicarFiltrosYOrden() {
    const art = document.getElementById("filtro-artista").value.toLowerCase();
    const can = document.getElementById("filtro-cancion").value.toLowerCase();
    const tipo = document.querySelector("input[name='tipo-artista']:checked").value;

    datosFiltrados = datosOriginales.filter(e => {
        const artistaOK = e.artist_name.toLowerCase().includes(art);
        const cancionOK = e.song_name.toLowerCase().includes(can);
        const tipoItem = e.group_or_solo === "Group" ? "Grupo" : "Solista";
        const tipoOK = tipo === "todos" || tipo === tipoItem;
        return artistaOK && cancionOK && tipoOK;
    });

    if (criterioOrden) {
        datosFiltrados.sort((a, b) =>
            a[criterioOrden] > b[criterioOrden] ? 1 : -1
        );
    }
}

/* ===== TABLA ===== */
function generarTabla() {
    const cont = document.getElementById("contenedor-tabla");
    cont.innerHTML = "";

    const tabla = document.createElement("table");
    tabla.innerHTML = `
        <tr>
            <th></th>
            <th>Artista</th>
            <th>Canción</th>
            <th>Año</th>
            <th>Ranking</th>
            <th>Tipo</th>
        </tr>
    `;

    paginaDatos().forEach(e => {
        tabla.innerHTML += `
        <tr onclick="mostrarDetalle(${e.id})">
            <td><input type="checkbox" data-id="${e.id}" onclick="event.stopPropagation()"></td>
            <td>${e.artist_name}</td>
            <td>${e.song_name}</td>
            <td>${e.release_year}</td>
            <td>${e.ranking}</td>
            <td>${e.group_or_solo === "Group" ? "Grupo" : "Solista"}</td>
        </tr>`;
    });

    cont.appendChild(tabla);
}

/* ===== REJILLA ===== */
function generarRejilla() {
    const cont = document.getElementById("contenedor-tabla");
    cont.innerHTML = "";

    const grid = document.createElement("div");
    grid.className = "contenedor";

    paginaDatos().forEach(e => {
        const card = document.createElement("div");
        card.className = "tarjeta";
        card.onclick = () => mostrarDetalle(e.id);

        if (e.video) {
            card.innerHTML = `
                <video controls poster="${e.imagen}">
                    <source src="${e.video}" type="video/mp4">
                </video>
            `;
        } else {
            card.innerHTML = `<img src="${e.imagen}">`;
        }

        card.innerHTML += `
            <p><strong>${e.artist_name}</strong></p>
            <p>${e.song_name}</p>
            <p>${e.release_year}</p>
            <p>Ranking: ${e.ranking}</p>
            <p>${e.group_or_solo === "Group" ? "Grupo" : "Solista"}</p>
            <input type="checkbox" data-id="${e.id}" onclick="event.stopPropagation()">
        `;

        grid.appendChild(card);
    });

    cont.appendChild(grid);
}

/* ===== DETALLE ===== */
function mostrarDetalle(id) {
    const e = datosOriginales.find(x => x.id === id);
    const d = document.getElementById("detalle-contenido");

    d.innerHTML = `
        <ul>
            <li><strong>Artista:</strong> ${e.artist_name}</li>
            <li><strong>Canción:</strong> ${e.song_name}</li>
            <li><strong>Año:</strong> ${e.release_year}</li>
            <li><strong>Ranking:</strong> ${e.ranking}</li>
            <li><strong>Álbum:</strong> ${e.album_name}</li>
            <li><strong>Género:</strong> ${e.genre}</li>
        </ul>
    `;
}

/* ===== LISTADO / BORRADO ===== */
function seleccionados() {
    return [...document.querySelectorAll("input[type='checkbox']:checked")]
        .map(c => parseInt(c.dataset.id));
}

function listarSeleccionados() {
    const ids = seleccionados();
    const lista = datosOriginales.filter(e => ids.includes(e.id));
    alert(lista.map(e => `${e.artist_name} - ${e.song_name}`).join("\n"));
}

function borrarSeleccionados() {
    const ids = seleccionados();
    datosOriginales = datosOriginales.filter(e => !ids.includes(e.id));
    renderizarTodo();
}

function paginaDatos() {
    const i = (paginaActual - 1) * REGISTROS_POR_PAGINA;
    return datosFiltrados.slice(i, i + REGISTROS_POR_PAGINA);
}
