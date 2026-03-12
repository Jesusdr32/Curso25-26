document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("avisos").style.display = "none";
  document.getElementById("detalle").style.display = "none";

  document.getElementById("cargadato")
    .addEventListener("click", cargarDatos);

  document.getElementById("tablero")
    .addEventListener("click", mostrarRejilla);

});