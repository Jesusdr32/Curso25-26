//Variables globales
let rect1 = document.getElementById("blk1");
let rect2 = document.getElementById("blk2");
let rect3 = document.getElementById("blk3");
<<<<<<< HEAD
let dialogo = document.getElementById("blk2dial");
let blk4 = document.getElementById("blk4");
let txt4 = document.getElementById("txt4");

let coordsFijadas = false;
let rect3Visible = true;
let eventosActivados = false; //evita listeneres múltiples
let rect1Fijado = false;
=======
let blk4 = document.getElementById("blk4");
let dialog2 = document.getElementById("blk2dial");

let coordsFijadas = false;
let rect3Visible  =true;
>>>>>>> 31126ccfdf766fcb293fa66b86291e076c8ce56c

//1. Estado inicial
rect1.style.backgroundColor = "darkgreen";
rect2.style.backgroundColor = "grey";
rect3.style.backgroundColor = "grey";
blk4.style.visibility = "hidden";
txt4.disabled = true;

<<<<<<< HEAD
//2. Al cbo de 2 segundos, avisar del comienzo
setTimeout(() => {
    alert("Todo preparado, comienza el juego");
    activarRect1Hover();
}, 2000);

//3. Rectángulo 1 hover cambia de color
=======
//2. Al cabo de 2 segundos, avisar
setTimeout(() => {
    alert("Todo preparado, comienza a jugar");
    activarRect1Hover();
}, 2000);

//3. Rectángulo 1 hover cambia color
>>>>>>> 31126ccfdf766fcb293fa66b86291e076c8ce56c
function activarRect1Hover() {
    rect1.addEventListener("mouseenter", () => {
        rect1.style.backgroundColor = "blue";
    });

    rect1.addEventListener("mouseleave", () => {
        rect1.style.backgroundColor = "darkgreen";
    });
<<<<<<< HEAD

    rect1.addEventListener("click", () => {
        rect1Fijado = true;
        rect1.style.backgroundColor = "blue"; //se queda fijo en azul
    });
=======
>>>>>>> 31126ccfdf766fcb293fa66b86291e076c8ce56c
}

//4. Click en rect1 activa eventos en rect2 y rect3
rect1.addEventListener("click", activarEventosRect2y3);
function activarEventosRect2y3() {
<<<<<<< HEAD
    if (eventosActivados) return; //evita duplicados
    eventosActivados = true;

    //5. Mostrar coordenadas en el dialog
    rect2.addEventListener("mousemove", (e) => {
        if (!coordsFijadas) {
            dialogo.textContent = `X: ${e.offsetX}, Y: ${e.offsetY}`;
            if (!dialogo.open) dialogo.show();
=======
    //5. Mostrar coordenadas en el dialog
    rect2.addEventListener("mousemove", (e) => {
        if (!coordsFijadas) {
            dialog2.textContent = `X: ${e.offsetX}, Y: ${e.offsetY}`;
            dialog2.show();
>>>>>>> 31126ccfdf766fcb293fa66b86291e076c8ce56c
        }
    });

    //6. Click fijar coordenadas
    rect2.addEventListener("click", (e) => {
        coordsFijadas = true;
<<<<<<< HEAD
        if (!dialogo.textContent.includes("(Fijado)")) {
            dialogo.textContent += " (Fijado) ";
        }
=======
        dialog2.textContent += " (Fijado) ";
>>>>>>> 31126ccfdf766fcb293fa66b86291e076c8ce56c
    });

    //7. Mouseup cambia color de rect2
    rect2.addEventListener("mouseup", () => {
<<<<<<< HEAD
        const color = window.getComputedStyle(rect2).backgroundColor;
        rect2.style.backgroundColor = color.includes("128, 128, 128") ? "darkgreen" : "grey";
=======
        rect2.style.backgroundColor = rect2.style.backgroundColor === "grey" ? "lightgrey" : "darkgreen";
>>>>>>> 31126ccfdf766fcb293fa66b86291e076c8ce56c
    });

    //8. Mouseleave muestra input debajo
    rect2.addEventListener("mouseleave", () => {
        blk4.style.visibility = "visible";
    });

    //9. Rect3 redimensionable muestra tamaño
<<<<<<< HEAD
    const obs = new ResizeObserver(() => {
=======
    let obs = new ResizeObserver(() => {
>>>>>>> 31126ccfdf766fcb293fa66b86291e076c8ce56c
        rect3.textContent = `Ancho: ${rect3.offsetWidth}px, Alto: ${rect3.offsetHeight}px`;
    });
    obs.observe(rect3);

<<<<<<< HEAD
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
=======
    //10. Tecla S activa el campo de texto
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
                location.reload(); //Resetea todos los eventos
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
                setTimeout(() => window.close(), 3000);
                break;
            default: //Mostrar código y tecla
                console.log(`Tecla: ${e.key}, Código: ${e.keyCode}`)
        }
    });
>>>>>>> 31126ccfdf766fcb293fa66b86291e076c8ce56c
}