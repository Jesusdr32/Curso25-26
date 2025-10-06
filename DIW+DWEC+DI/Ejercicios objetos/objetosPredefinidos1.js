function Ejercicio1reemplazarOcurrencias() {
    let texto = document.getElementById("texto").value;
    let ocurrencia = document.getElementById("ocurrencia").value;
    let sustitucion = document.getElementById("sustitucion").value;
    texto = texto.toLowerCase().replaceAll(ocurrencia, sustitucion)
    let respuesta_texto = document.getElementById("texto_modificado").textContent = texto;
}

function Ejercicio1reemplazarPrimeraOcurrencia() {
    let texto = document.getElementById("texto").value;
    let ocurrencia = document.getElementById("ocurrencia").value;
    let sustitucion = document.getElementById("sustitucion").value;
    texto = texto.toLowerCase().replace(ocurrencia, sustitucion);
    let respuesta_texto = document.getElementById("texto_modificado").textContent = texto;
}

function Ejercicio1contarOcurrenciasSustituidas() {
    let texto = document.getElementById("texto").value;
    let ocurrencia = document.getElementById("ocurrencia"). value;
    let sustitucion = document.getElementById("sustitucion").value;
    let cont = 0;

    let respuesta_texto = document.getElementById("texto_modificado").textContent = texto + ": el texto has sido modificado " + cont;
}

function Ejercicio1preguntarReemplazo() {
    
}

function Ejercicio3() {
    let dia = document.getElementById("dia").valueAsNumber;
    let mes = document.getElementById("mes").valueAsNumber;
    let anio = document.getElementById("anio").valueAsNumber;
    let fecha = new Date(anio, mes - 1, dia);
    let respuesta;
    switch (fecha.getDay()) {
        case 0:
            respuesta = "Domingo";
            break;
        case 1:
            respuesta = "Lunes";
            break;
        case 2:
            respuesta = "Martes";
            break;
        case 3:
            respuesta = "Miercoles";
            break;
        case 4:
            respuesta = "Jueves";
            break;
        case 5:
            respuesta = "Viernes";
            break;
        case 6:
            respuesta = "Sabado";
            break;
        default:
            respuesta = "la fecha no está bien estructurada"
    }
    let dia_semana = document.getElementById("dia_semana").textContent = respuesta;
}

function Ejercicio4() {
    let hora_madrid = document.getElementById("hora_madrid").value;
    let hoy = new Date();
    let [h,m, s] = hora_madrid.split(":").map(Number);
    let fechaLocal = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate(), h, m, s);
    let bogota = new Intl.DateTimeFormat('es-CO', {
        timeZone: 'America/Bogota', 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });
    let pekin = new Intl.DateTimeFormat('es-CO', {
        timeZone: 'Asia/Shanghai', 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });
    let nuevaYork = new Intl.DateTimeFormat('es-CO', {
        timeZone: 'America/New_York', 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });
    let sydney = new Intl.DateTimeFormat('es-CO', {
        timeZone: 'Australia/Sydney', 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });
    let horas = document.getElementById("horas").textContent = "La fecha en Pekín es " + pekin.format(fechaLocal) 
    + ", en Nueva York es " + nuevaYork.format(fechaLocal) 
    + ", en Bogotá es " + bogota.format(fechaLocal) 
    + " y en Sydney es " + sydney.format(fechaLocal);
}

function Ejercicio5() {
    let cadena = document.getElementById("cadena").value;
    let respuesta;
    if (typeof cadena === 'string') {
        respuesta = 'Es una cadena';
    } else if (typeof cadena === 'inter') {
        respuesta = 'Es un entero';
    } else if (typeof cadena === 'double') {
        respuesta = 'Es un número decimal';
    } else if (typeof cadena === 'long') {
        respuesta = 'Es un entero largo';
    } else {
        respuesta = 'Es otro tipo de dato';
    }
    let tipo_valor = document.getElementById("tipo_valor").textContent = respuesta;
}