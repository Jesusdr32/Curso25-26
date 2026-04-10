let btn = document.getElementById("btn");
let contenedor = document.getElementById("contenedor");
let res = document.getElementById("res");

btn.addEventListener("click", cargar);

async function cargar() {
    let r = await fetch("usuarios.json");
    let datos = await r.json();

    datos.forEach((u) => {
        let tarjeta = document.createElement("div");
        tarjeta.textContent = u.nombre;

        tarjeta.addEventListener("click", () => {
            res.textContent = u.edad;
        })
        
        contenedor.appendChild(tarjeta);
    })
}