const divccaa = document.getElementById("blqccaa");
const divprov = document.getElementById("blqprov");

function start() {
  listaCCAA.forEach((ccaa) => {
    let pccaa = document.createElement("p");
    pccaa.innerText = ccaa.nombre;
    pccaa.setAttribute("id", ccaa.codigo);
    pccaa.style.backgroundColor = "pink";
    pccaa.addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = "yellow";
    });
    pccaa.addEventListener("mouseout", (e) => {
      e.target.style.backgroundColor = "pink";
    });

    pccaa.addEventListener("click", async function () {
      await loadProvincias(this.id);
      escribeProvincias();
    });
    divccaa.appendChild(pccaa);
  });
}

function escribeProvincias() {
  divprov.innerHTML = "";
  listaProv.forEach((prov) => {
    let pprov = document.createElement("p");
    pprov.innerText = prov.nombre;
    pprov.setAttribute("id", prov.codigo);
    pprov.addEventListener("click", mostrarCodProvincia);
    divprov.appendChild(pprov);
  });
}

function mostrarCodProvincia() {
  alert("Código de provincia:" + this.id);
}

function restart() {
  divccaa.innerHTML = "";
  divprov.innerHTML = "";
  listaProv = [];
}
