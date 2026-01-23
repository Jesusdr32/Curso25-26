let listaCirculos = JSON.parse(circle_data);

let listaCiudades = [
    "Santander",
    "Madrid",
    "Toledo",
    "Granada",
    "Valencia",
    "Sevilla",
    "Cádiz",
    "Barcelona",
    "Málaga",
    "Bilbao"
];

const seleccion = document.getElementById("seleccion");
const contenedor = document.getElementById("grafica");
const nombre = document.getElementById("nombre");
const datos = document.getElementById("datos");

let circuloSeleccionado = null;

const divSeleccion = document.createElement("div");
seleccion.appendChild(divSeleccion);

const divNombre = document.createElement("div");
nombre.appendChild(divNombre);

const divDatos = document.createElement("div");
datos.appendChild(divDatos);

/*let html = `<label for=""></label>
                            <select name="" id="">
                                <option value="">Seleccione una ciudad ...</option>`;

for (let i = 0;i < listaCiudades.length - 1; i ++) {
    html += `<option value="${listaCiudades[i]}">${listaCiudades}</option>`;
}

html += `</select>`;

divSeleccion = innerHTML = html;*/

listaCirculos.forEach(e => {
    const circulo = document.createElement("div");
    circulo.classList.add('circle');

    circulo.style.left = `${e.ejex}px`;
    circulo.style.top = `${e.ejey}px`;
    circulo.style.width = `${e.box}px`;
    circulo.style.height = `${e.box}px`;
    circulo.style.boxShadow = `0 0 0 ${e.margin}px ${e.colormargin}`;
    circulo.style.backgroundColor = e.colorbox;

    contenedor.appendChild(circulo);

    circulo.addEventListener("mouseover", () => {
        if (circuloSeleccionado === null) {
            divNombre.textContent = e.label;
        }
    });

    circulo.addEventListener("mouseout", () => {
        if (circuloSeleccionado === null) {
            divNombre.textContent = "";
        }
    });

    circulo.addEventListener("click", () => {
        circuloSeleccionado = circulo;

        divNombre.textContent = e.label;

        divDatos.innerHTML = `Código: ${e.cod}<br>
                                Valor: ${e.box}<br>
                                Incremento: ${e.margin}`
    });
});

