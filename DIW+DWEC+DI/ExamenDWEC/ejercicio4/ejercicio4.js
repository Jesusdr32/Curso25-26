let nombres = ["Ana", "Luis", "Pedro", "Marta"]

let lista = document.getElementById("lista")
let resultado = document.getElementById("resultado")

nombres.forEach(nombre => {
    let li = document.createElement("li")
    li.textContent = nombre

    li.addEventListener("click", () => {
        document.querySelectorAll("li").forEach(x => {
            x.classList.remove("activo")
        })

        li.classList.add("activo")

        resultado.textContent = nombre
    })
    lista.appendChild(li)
})