//Variables globales
let rect1 = document.getElementById("blk1");
let rect2 = document.getElementById("blk2");
let rect3 = document.getElementById("blk3");
let dialogo = document.getElementById("blk2dial");
let blk4 = document.getElementById("blk4");
let txt4 = document.getElementById("txt4");

let coordsFijadas = false;
let rect3Visible = true;
let eventosActivados = false; //evita listeneres múltiples
let rect1Fijado = false;

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

    rect1.addEventListener("click", () => {
        rect1Fijado = true;
        rect1.style.backgroundColor = "blue"; //se queda fijo en azul
    });
}

//4. Click en rect1 activa eventos en rect2 y rect3
rect1.addEventListener("click", activarEventosRect2y3);
function activarEventosRect2y3() {
    if (eventosActivados) return; //evita duplicados
    eventosActivados = true;

    //5. Mostrar coordenadas en el dialog
    rect2.addEventListener("mousemove", (e) => {
        if (!coordsFijadas) {
            dialogo.textContent = `X: ${e.offsetX}, Y: ${e.offsetY}`;
            if (!dialogo.open) dialogo.show();
        }
    });

    //6. Click fijar coordenadas
    rect2.addEventListener("click", (e) => {
        coordsFijadas = true;
        if (!dialogo.textContent.includes("(Fijado)")) {
            dialogo.textContent += " (Fijado) ";
        }
    });

    //7. Mouseup cambia color de rect2
    rect2.addEventListener("mouseup", () => {
        const color = window.getComputedStyle(rect2).backgroundColor;
        rect2.style.backgroundColor = color.includes("128, 128, 128") ? "darkgreen" : "grey";
    });

    //8. Mouseleave muestra input debajo
    rect2.addEventListener("mouseleave", () => {
        blk4.style.visibility = "visible";
    });

    //9. Rect3 redimensionable muestra tamaño
    const obs = new ResizeObserver(() => {
        rect3.textContent = `Ancho: ${rect3.offsetWidth}px, Alto: ${rect3.offsetHeight}px`;
    });
    obs.observe(rect3);

    //10 y 11. Atajos de teclado
    document.addEventListener("keydown", manejarTeclas);
}

function manejarTeclas(e) {
    const key = e.key.toUpperCase();

    //Tecla 'S' activa el input
    if (key === "S") {
        txt4.disabled = false;
        txt4.focus();
        return;
    }

    //Si el input aún está desactivado, no procesar el resto
    if (txt4.disabled) return;

    //Atajos
    switch (key) {
        case "R": //reset
            location.reload();
            break;
        case "H": //ocultar rect3
            alert("Vas a borrar un rectángulo")
            rect3.style.display = "none";
            rect3Visible = false;
            break;
        case "B": //mostrar rect3
            if (confirm("¿Estás seguro de mostrar el rectángulo?")) {
                rect3.style.display = "block";
                rect3Visible = true;
            }
            break;
        case "Q": //salir
            alert("Hasta pronto ...");
            setTimeout(() => {
                try {
                    window.close();
                } catch {
                    console.warn("El navegador impide cerrar la ventana");
                }
            }, 3000);
            break;
        default:
            console.log(`Tecla: ${e.key}, Código: ${e.keyCode}`);
            break;
    }
}