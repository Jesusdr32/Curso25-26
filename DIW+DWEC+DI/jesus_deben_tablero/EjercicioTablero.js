'use strict'

let colorActivo = "white"
let pincelActivo = false

function validarEntrada() {
    const clave = document.getElementById("clave1").value.toLowerCase();
    const claveCorrecta = clave.length === 10 && clave.startsWith("j") && clave.includes("ap")

    const tabla = document.getElementsByTagName("table")[0]
    const filaChecks = tabla.rows[2].getElementsByTagName("input")

    const checksActivados =
        (!filaChecks[0].checked) &&
        (filaChecks[1].checked) &&
        (filaChecks[2].checked) &&
        (!filaChecks[3].checked) &&
        (filaChecks[4].checked) &&
        (!filaChecks[5].checked)

    if(claveCorrecta && checksActivados) {
        activarTablero()
    } else {
        alert("Claves incorrectas")
    }
}

function activarTablero() {
    document.getElementById("claves").style.visibility = "hidden"
    document.getElementById("controles").style.visibility = "visible"
    crearTabla()
    activarPaleta()
}

function crearTabla() {
    const zona = document.getElementById("zonadibujo")
    let html = "<table class='tablerodibujo'>"

    for(let i=0;i<30;i++){
        html += "<tr>"
        for(let j=0;j<30;j++){
            html += "<td></td>"
        }
        html += "</tr>"
    }

    html += "</table>"
    zona.innerHTML = html

    activarPintado()
}

function activarPaleta() {
    const paleta = document.getElementById("paleta")
    const celdas = paleta.getElementsByTagName("td")

    for(let i=0;i<6;i++){
        celdas[i].addEventListener("click", function(){
            colorActivo = window.getComputedStyle(this).backgroundColor
        })
    }
}

function activarPintado() {
    const zona = document.getElementById("zonadibujo")
    const celdas = zona.getElementsByTagName("td")
    const estado = document.getElementById("pincel")

    for(let i=0;i<celdas.length;i++){
        celdas[i].addEventListener("click", function(){
            pincelActivo = !pincelActivo
            estado.textContent = pincelActivo ? "PINCEL ACTIVADO" : "PINCEL DESACTIVADO"
        })

        celdas[i].addEventListener("mousemove", function(){
            if(pincelActivo){
                this.style.backgroundColor = colorActivo
            }
        })
    }
}
