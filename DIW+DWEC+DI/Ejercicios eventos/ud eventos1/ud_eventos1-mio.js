//Variables globales
let rect1 = document.getElementById("blk1");
let rect2 = document.getElementById("blk2");
let rect3 = document.getElementById("blk3");
let dialogo = document.getElementById("blk2dial");
let blk4 = document.getElementById("blk4");

let coordsFijadas = false;
let rect3Visible = true;

//1. Estado inicial
rect1.style.backgroundColor = "darkgreen";
rect2.style.backgroundColor = "grey";
rect3.style.backgroundColor = "grey";
blk4.style.visibility = "hidden";
txt4.disabled = true;

//2. Al cbo de 2 segundos, avisar del comienzo
setTimeout(() => {
    alert("Todo preparado, comienza el juego");
    activarRect1Hover();
}, 2000);

//3. Rectángulo 1 hover cambia de color
function activarRect1Hover() {
    rect1.addEventListener("mouseenter", () => {
        rect1.style.backgroundColor = "blue";
    });

    rect1.addEventListener("mouseleave", () => {
        rect1.style.backgroundColor = "darkgreen";
    });
}

//4. Click en rect1 activa eventos en rect2 y rect3
rect1.addEventListener("click", activarEventosRect2y3);
function activarEventosRect2y3() {
    //5. Mostrar coordenadas en el dialog
    rect2.addEventListener("mousemove", (e) => {
        if (!coordsFijadas) {
            dialogo.textContent = `X: ${e.offsetX}, Y: ${e.offsetY}`;
            dialogo.show();
        }
    });

    //6. Click fijar coordenadas
    rect2.addEventListener("click", (e) => {
        coordsFijadas = true;
        dialogo.textContent += " (Fijado) ";
    });

    //7. Mouseup cambia color de rect2
    rect2.addEventListener("mouseup", () => {
        rect2.style.backgroundColor = rect2.style.backgroundColor === "grey" ? "lightgrey" : "darkgreen";
    });

    //8. Mouseleave muestra input debajo
    rect2.addEventListener("mouseleave", () => {
        blk4.style.visibility = "visible";
    });

    //9. Rect3 redimensionable muestra tamaño
    let obs = new ResizeObserver(() => {
        rect3.textContent = `Ancho: ${rect3.offsetWidth}px, Alto: ${rect3.offsetHeight}px`;
    });
    obs.observe(rect3);

    //10. Tecla 'S' activa el campo de texto
    document.addEventListener("keydown", (e) => {
        if (e.key.toUpperCase() === "S") {
            txt4.disabled = false;
            txt4.focus();
        }
    });

    //11. Atajos en input activo
    document.addEventListener("keydown", (e) => {
        if (txt4.disabled) return;

        let key = e.key.toUpperCase();

        switch (key) {
            case "R": //Reset
                location.reload(); //Resetear todos los eventos
                break;
            case "H": //Ocultar rect3
                alert("Vas a borrar un rectángulo");
                rect3.style.display = "none";
                rect3Visible = false;
                break;
            case "B": //Mostrar rect3
                if (confirm("¿Estás seguro de mostrar el rectángulo?")) {
                    rect3.style.display = "block";
                    rect3Visible = true;
                }
                break;
            case "Q": //Salir
                alert("Hasta pronto ...");
                setTimeout(() => window.close(), 3000 );
                break;
            default: //Mostrar código y tecla
                console.log(`Tecla: ${e.key}, Código: ${e.keyCode}`);
                break;
        }
    });
}