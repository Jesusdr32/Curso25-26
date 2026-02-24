const continfo = document.getElementById("info");

const contComunidades = document.getElementById("selcomunidad");

document.getElementById("avisos").style.display = "none";
document.getElementById("detalle").style.display = "none";

const tablero = document.getElementById("tablero");

tablero.addEventListener("click", function() {
    continfo.style.display = "block";
    mostrarRejilla(continfo);
})