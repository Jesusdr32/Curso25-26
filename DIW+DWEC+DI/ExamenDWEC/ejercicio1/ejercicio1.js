let productos = [
    {id: 1, nombre: "Teclado", precio: 25},
    {id: 2, nombre: "Ratón", precio: 15},
    {id: 3, nombre: "Monitor", precio: 180}
]

let contenedor = document.getElementById("productos");
let resultado = document.getElementById("resultado");

productos.forEach((p) => {
    let tarjeta = document.createElement("div");

    let nombre = document.createElement("p");
    nombre.textContent = p.nombre;

    let boton = document.createElement("button");
    boton.textContent = "Ver precio";

    boton.addEventListener("click",  () => {
        resultado.textContent = p.precio + " €"
    });

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(boton);

    contenedor.appendChild(tarjeta);
})