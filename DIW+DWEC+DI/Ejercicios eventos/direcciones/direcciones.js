let nombreCampos = cabecera.split(';');
let listaRegistros;

const btnusuario = document.getElementById("btnusuario");
const btnempresa = document.getElementById("btnempresa");
const btnciudad = document.getElementById("btnciudad");
const lienzo = document.getElementById("lienzo");

const columnasVisibles = {
    usuario: false,
    empresa: false,
    ciudad: false
};

function crearListaRegistros() {
    let registros = [];
    let lineasRegistros = listaUsuarios.split('\n');

    for (let i = 0; i < lineasRegistros.length; i ++) {
        let valores = lineasRegistros[i].split(';');

        let reg = {};

        for (let j = 0; j < valores.length; j ++) {
            reg[nombreCampos[j]] = valores[j];
        }
        registros.push(reg);
    }
    return registros;
}

listaRegistros = crearListaRegistros();
listaRegistrosFinal = listaRegistros.filter(r => (r.usuario != "") && (r.empresa != "") && (r.ciudad != ""));

function renderizarTabla() {
    const columnas = Object.keys(columnasVisibles).filter(c => columnasVisibles[c]);
    if (columnas.length === 0) {
        lienzo.innerHTML = "";
        return;
    }

    let html = "<table border='1' cellpadding='4'><tr>";
    columnas.forEach(c => html += `<th>${c}</th>`);
    html += "</tr>";

    listaRegistrosFinal.forEach(reg => {
        html += "<tr>";
        columnas.forEach(c => html += `<td>${reg[c]}</td>`);
        html += "</tr>";
    });

    html += "</table>";
    lienzo.innerHTML = html;
}

btnusuario.addEventListener("click", () => {
    columnasVisibles.usuario = !columnasVisibles.usuario;
    renderizarTabla();
});

btnempresa.addEventListener("click", () => {
    columnasVisibles.empresa = !columnasVisibles.empresa;
    renderizarTabla();
});

btnciudad.addEventListener("click", () => {
    columnasVisibles.ciudad = !columnasVisibles.ciudad;
    renderizarTabla();
});