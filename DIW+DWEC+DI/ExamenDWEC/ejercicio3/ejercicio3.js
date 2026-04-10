let libros = [
    {titulo: "JavaScript básico", tema: "js"},
    {titulo: "DOM en acción", tema: "dom"},
    {titulo: "Fetch y APIs", tema: "js"},
    {titulo: "CSS moderno", tema: "css"}
]

let txt = document.getElementById("txt")
let btn = document.getElementById("btn")
let resultado = document.getElementById("resultado")

btn.addEventListener("click", filtrar)

function filtrar() {
    resultado.innerHTML = ""

    let texto = txt.value

    let filtrados = libros.filter(libro => libro.tema === texto)

    filtrados.forEach(libro => {
        let div = document.createElement("div")
        div.textContent = libro.titulo

        resultado.appendChild(div)
    })
}