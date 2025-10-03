/*let saludo = prompt("Buenos días");
alert("Buenos días");
function Ejercicio01() {
    let texto = "Esta es mi respuesta";
    let respuesta = document.getElementById("respuesta1").textContent=texto;
    document.writeln(texto);
    let respuesta1 = document.getElementById("dia").value;
    let respuesta = document.getElementById("respuesta1").textContent=respuesta1;
    let respuesta = document.getElementById("respuesta1").valueAsNumber;

}*/

function Ejercicio1() {
    let dia = document.getElementById("dia").value;
    if (dia.toLowerCase() === ("domingo")) {
        alert("el día escogido es domingo");
        //let respuesta_dia = document.getElementById("respuesta_dia").textContent = "El dia escogido es domingo";
    }
}

function Ejercicio2() {
    let edad_Luis = document.getElementById("edad_Luis").value;
    let edad_Ana = document.getElementById("edad_Ana").value;
    if (!(isNaN(edad_Luis) || isNaN(edad_Ana))) {
        if ((edad_Luis > 0 && edad_Luis < 100) && (edad_Ana > 0 && edad_Luis < 100)) {
            let respuesta_edad = document.getElementById("respuesta_edad").textContent = "Las edades introducidas son correctas";
        } else {
            let respuesta_edad = document.getElementById("respuesta_edad").textContent = "Las edades introducidas no pueden ser reales, ninguna persona tiene esa edad";
        }
    } else {
        let respuesta_edad = document.getElementById("respuesta_edad").textContent = "Por favor introduce un número, únicamente números";
    }
}

function Ejercicio3() {
    let edad_Luis_rango = document.getElementById("edad_Luis_rango").value;
    let edad_Ana_rango = document.getElementById("edad_Ana_rango").value;
    let respuesta_Luis_rango = "";
    let respuesta_Ana_rango = "";
    if (!isNaN(edad_Luis_rango)) {
       if (edad_Luis_rango < 18) {
        respuesta_Luis_rango = "Luis es menor de edad";
       } else if (edad_Luis_rango >= 18 && edad_Luis_rango < 65) {
        respuesta_Luis_rango = "Luis es adulto";
       } else {
        respuesta_Luis_rango = "Luis es un jubilado";
       }
    }
    if (!isNaN(edad_Ana_rango)) {
       if (edad_Ana_rango < 18) {
        respuesta_Ana_rango = "Ana es menor de edad";
       } else if (edad_Ana_rango >= 18 && edad_Ana_rango < 65) {
        respuesta_Ana_rango = "Ana es adulta";
       } else {
        respuesta_Ana_rango = "Ana es una jubilada"
       }
    }

    let respuesta_edad_Luis_rango = document.getElementById("respuesta_edad_Luis_rango").textContent = respuesta_Luis_rango;
    let respuesta_edad_Ana_rango = document.getElementById("respuesta_edad_Ana_rango").textContent = respuesta_Ana_rango;
}

function Ejercicio4() {
    let nombre = document.getElementById("nombre").value;
    let respuesta_nombre = document.getElementById("respuesta_nombre").textContent = "Hola " + nombre + ", bienvenido a esta página HTML";

}

function Ejercicio5() {
    let respuesta = " ";
    for (let i = 0; i <= 30; i ++) {
        if (i % 2 == 0) {
            respuesta += " " + i + "";
        }
    }
    let respuesta_pares = document.getElementById("respuesta_pares").textContent = respuesta;
}

function Ejercicio6() {
    let respuesta = "";
    for (let i = 0; i <= 3000; i ++) {
        if (!(2 ** i > 3000)) {
            respuesta += " " + 2 ** i + " ";
        }
    }
    let respuesta_potencias = document.getElementById("respuesta_potencias").textContent = respuesta;
}

function Ejercicio7() {
    let respuesta = "";
    let contraseña;
    contraseña = prompt("introduce la contraseña");
    if (contraseña !== "DA2D1E"){
    do {
        contraseña = prompt("intentelo de nuevo, introduce la contraseña");
    } while (contraseña !== "DA2D1E")
    }
    let respuesta_clave = document.getElementById("respuesta_clave").textContent = "Has acertado";
}

/**function Ejercicio8() {
    let respuesta = "";
    let clave = document.getElementById("clave").textContent.value;
    let contraseña;
    contraseña = prompt("introduce la contraseña");
    if (contraseña !== clave){
    do {
        contraseña = prompt("intentelo de nuevo, introduce la contraseña");
    } while (contraseña !== clave)
    }
}

function Ejercicio9() {
    let respuesta = "";
    let clave = document.getElementById("clave1").textContent.value;
    let contraseña;
    contraseña = prompt("introduce la contraseña");
    if (contraseña !== clave){
    do {
        for (i = 0; i <= 3; i ++){
            contraseña = prompt("intentelo de nuevo, introduce la contraseña");
        }
    } while (contraseña !== clave && i != 3)
    }
}**/

