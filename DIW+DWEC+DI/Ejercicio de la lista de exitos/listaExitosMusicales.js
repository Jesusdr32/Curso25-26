/**
 * Lógica para la Lista de Éxitos Musicales
 */

// 1. VARIABLES DE ESTADO
// Usamos 'exitos' que es el nombre de tu array en datosExitosMusicales.js
let datosOriginales = [...exitos]; 
let datosFiltrados = [...exitos];
let paginaActual = 1;
const REGISTROS_POR_PAGINA = 25;
let criterioOrden = null; // null significa el orden original (Nº Orden)

// 2. INICIALIZACIÓN
window.onload = () => {
    configurarEventos();
    renderizarTodo();
};

function configurarEventos() {
    // Filtrado por texto (Input)
    const inputBusqueda = document.getElementById('filtro-artista');
    inputBusqueda.addEventListener('input', () => {
        paginaActual = 1;
        renderizarTodo();
    });

    // Filtrado por radio buttons
    const radios = document.getElementsByName('tipo-artista');
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            paginaActual = 1;
            renderizarTodo();
        });
    });

    // Paginación (Botones ya existentes en tu HTML)
    const botonesPagina = document.querySelectorAll('#paginacion button');
    botonesPagina.forEach(boton => {
        boton.addEventListener('click', (e) => {
            paginaActual = parseInt(e.target.textContent);
            renderizarTodo();
        });
    });
}

// 3. PROCESAMIENTO Y RENDERIZADO
function renderizarTodo() {
    aplicarFiltrosYOrden();
    generarTablaDOM();
    actualizarEstadoPaginacion();
}

function aplicarFiltrosYOrden() {
    const texto = document.getElementById('filtro-artista').value.toLowerCase();
    const tipoRadio = document.querySelector('input[name="tipo-artista"]:checked').value;

    // A. Filtrar
    datosFiltrados = datosOriginales.filter(item => {
        const coincideArtista = item.artist_name.toLowerCase().includes(texto);
        // Mapeamos 'Solo'/'Group' del JSON a 'Solista'/'Grupo' del radio
        const tipoMapeado = item.group_or_solo === 'Group' ? 'Grupo' : 'Solista';
        const coincideTipo = (tipoRadio === 'todos' || tipoMapeado === tipoRadio);
        return coincideArtista && coincideTipo;
    });

    // B. Ordenar
    if (criterioOrden) {
        datosFiltrados.sort((a, b) => {
            let valA = a[criterioOrden] || "";
            let valB = b[criterioOrden] || "";
            return valA > valB ? 1 : (valA < valB ? -1 : 0);
        });
    }
}

// 4. GENERACIÓN DE LA TABLA (DOM PURO)
function generarTablaDOM() {
    const contenedor = document.getElementById('contenedor-tabla');
    
    // Mantener el H3 y limpiar lo anterior
    const titulo = contenedor.querySelector('h3');
    contenedor.innerHTML = '';
    contenedor.appendChild(titulo);

    const tabla = document.createElement('table');
    tabla.setAttribute('border', '1');
    tabla.style.width = "100%";
    tabla.style.borderCollapse = "collapse";

    // Cabecera
    const thead = document.createElement('thead');
    const filaH = document.createElement('tr');
    const columnas = [
        { label: 'Nº Orden', campo: null }, // Click aquí resetea orden
        { label: 'Artista', campo: 'artist_name' },
        { label: 'Canción', campo: 'song_name' },
        { label: 'Año', campo: 'release_year' },
        { label: 'Tipo', campo: null },
        { label: 'Seleccionar', campo: null }
    ];

    columnas.forEach(col => {
        const th = document.createElement('th');
        th.textContent = col.label;
        th.style.cursor = "pointer";
        th.style.padding = "8px";
        th.style.backgroundColor = "#f2f2f2";
        
        th.onclick = () => {
            criterioOrden = col.campo; // Si es null, vuelve al orden original
            renderizarTodo();
        };
        filaH.appendChild(th);
    });
    thead.appendChild(filaH);
    tabla.appendChild(thead);

    // Cuerpo
    const tbody = document.createElement('tbody');
    const inicio = (paginaActual - 1) * REGISTROS_POR_PAGINA;
    const datosPagina = datosFiltrados.slice(inicio, inicio + REGISTROS_POR_PAGINA);

    datosPagina.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.style.cursor = "pointer";
        tr.onclick = () => mostrarDetalle(item);

        // 1. Nº Orden
        const tdOrden = document.createElement('td');
        tdOrden.textContent = inicio + index + 1;
        tr.appendChild(tdOrden);

        // 2, 3, 4. Datos (Tratamiento de nulos)
        const campos = ['artist_name', 'song_name', 'release_year'];
        campos.forEach(c => {
            const td = document.createElement('td');
            td.textContent = (item[c] === null || item[c] === undefined) ? ' ' : item[c];
            tr.appendChild(td);
        });

        // 5. Tipo (Literal)
        const tdTipo = document.createElement('td');
        tdTipo.textContent = item.group_or_solo === 'Group' ? 'Grupo' : 'Solista';
        tr.appendChild(tdTipo);

        // 6. Checkbox
        const tdCheck = document.createElement('td');
        const check = document.createElement('input');
        check.type = 'checkbox';
        check.onclick = (e) => e.stopPropagation(); // No abrir detalle al marcar check
        tdCheck.appendChild(check);
        tr.appendChild(tdCheck);

        tbody.appendChild(tr);
    });

    tabla.appendChild(tbody);
    contenedor.appendChild(tabla);
}

// 5. DETALLE (ID: detalle-contenido)
function mostrarDetalle(item) {
    const contenedorDetalle = document.getElementById('detalle-contenido');
    contenedorDetalle.innerHTML = ''; // Limpiar mensaje inicial

    const ul = document.createElement('ul');
    
    // Los 6 campos (4 obligatorios + 2 elegidos: album_name y genre)
    const camposMap = [
        { e: 'Artista', v: item.artist_name },
        { e: 'Canción', v: item.song_name },
        { e: 'Año', v: item.release_year },
        { e: 'Tipo', v: item.group_or_solo === 'Group' ? 'Grupo' : 'Solista' },
        { e: 'Álbum', v: item.album_name },
        { e: 'Género', v: item.genre }
    ];

    camposMap.forEach(campo => {
        const li = document.createElement('li');
        const valorLimpio = (campo.v === null || campo.v === undefined) ? ' ' : campo.v;
        li.innerHTML = `<strong>${campo.e}:</strong> ${valorLimpio}`;
        ul.appendChild(li);
    });

    contenedorDetalle.appendChild(ul);
}

// 6. UTILIDAD PARA BOTONES DE PAGINACIÓN
function actualizarEstadoPaginacion() {
    const botones = document.querySelectorAll('#paginacion button');
    botones.forEach(btn => {
        if (parseInt(btn.textContent) === paginaActual) {
            btn.style.backgroundColor = "#ccc";
            btn.style.fontWeight = "bold";
        } else {
            btn.style.backgroundColor = "";
            btn.style.fontWeight = "normal";
        }
    });
}