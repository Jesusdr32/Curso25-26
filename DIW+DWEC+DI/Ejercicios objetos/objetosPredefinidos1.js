function Ejercicio1reemplazarOcurrencias() {
    const texto = document.getElementById("texto").value;
    const ocurrencia = document.getElementById("ocurrencia").value;
    const sustitucion = document.getElementById("sustitucion").value;

    if (!ocurrencia) return alert("Introduce una palabra a buscar");

    const regex = new RegExp(ocurrencia, "g");
    const resultado = texto.replace(regex, sustitucion);
    document.getElementById("texto_modificado").textContent = resultado;
}

function Ejercicio1reemplazarPrimeraOcurrencia() {
    const texto = document.getElementById("texto").value;
    const ocurrencia = document.getElementById("ocurrencia").value;
    const sustitucion = document.getElementById("sustitucion").value;

    if (!ocurrencia) return alert("Introduce una palabra a buscar");

    const resultado = texto.replace(ocurrencia, sustitucion);
    document.getElementById("texto_modificado").textContent = resultado;
}

function Ejercicio1contarOcurrenciasSustituidas() {
    const texto = document.getElementById("texto").value;
    const ocurrencia = document.getElementById("ocurrencia").value;

    if (!ocurrencia) return alert("Introduce una palabra a buscar");

    const regex = new RegExp(ocurrencia, "g");
    const ocurrencias = (texto.match(regex) || []).length;

    document.getElementById("texto_modificado").textContent = 
        `Número de ocurrencias de "${ocurrencia}": ${ocurrencias}`;
}

function Ejercicio1preguntarReemplazo() {
    let texto = document.getElementById("texto").value;
    const ocurrencia = document.getElementById("ocurrencia").value;
    const sustitucion = document.getElementById("sustitucion").value;

    if (!ocurrencia) return alert("Introduce una palabra a buscar");

    const regex = new RegExp(ocurrencia, "g");
    let indices = [];
    let pos = texto.indexOf(ocurrencia);
    while (pos !== -1) {
        indices.push(pos);
        pos = texto.indexOf(ocurrencia, pos + ocurrencia.length);
    }

    for (let i = 0; i < indices.length; i++) {
        let confirma = confirm(`¿Deseas reemplazar la ocurrencia "${ocurrencia}" en la posición ${indices[i]}?`);
        if (confirma) {
            texto = texto.replace(ocurrencia, sustitucion);
        }
    }

    document.getElementById("texto_modificado").textContent = texto;
}

function Ejercicio2() {
    let texto = document.getElementById("texto2").value;
    const palabra = document.getElementById("palabra").value;
    const opcion = document.getElementById("opcion").value;
    const output = document.getElementById("texto_formateado");

    if (!palabra || !opcion) {
        output.textContent = "Debes introducir una palabra y una opción.";
        return;
    }

    let reemplazo = palabra;

    switch(opcion) {
        case "B":
            reemplazo = "<b>" + palabra + "</b>";
            break;
        case "b":
            reemplazo = "<marquee>" + palabra + "</marquee>";
            break;
        case "G":
            reemplazo = "<span style='font-size:24px;'>" + palabra + "</span>";
            break;
        case "M":
            reemplazo = palabra.toUpperCase();
            break;
        case "n":
            reemplazo = palabra.toLowerCase();
            break;
        case "s":
            reemplazo = "<span style='font-size:10px;'>" + palabra + "</span>";
            break;
        default:
            output.textContent = "Opción inválida.";
            return;
    }

    const regex = new RegExp(palabra, "g");
    const textoFormateado = texto.replace(regex, reemplazo);

    output.innerHTML = textoFormateado;
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
    document.getElementById("dia_semana").textContent = respuesta;
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
    document.getElementById("horas").textContent = "La fecha en Pekín es " + pekin.format(fechaLocal) 
    + ", en Nueva York es " + nuevaYork.format(fechaLocal) 
    + ", en Bogotá es " + bogota.format(fechaLocal) 
    + " y en Sydney es " + sydney.format(fechaLocal);
}

function Ejercicio5() {
  let cadena = document.getElementById("cadena").value.trim();
  let respuesta;

  if (cadena === "") {
    respuesta = "Está vacío";
  } else if (!isNaN(cadena)) {
    let numero = Number(cadena);

    if (Number.isInteger(numero)) {
      respuesta = "Es un entero";
    } else {
      respuesta = "Es un número decimal";
    }
  } else if (cadena.endsWith("n")) {
    try {
      BigInt(cadena.slice(0, -1));
      respuesta = "Es un entero largo";
    } catch {
      respuesta = "Es una cadena";
    }
  } else {
    respuesta = "Es una cadena";
  }

  document.getElementById("tipo_valor").textContent = respuesta;
}

function Ejercicio6() {
    let num = document.getElementById("temporizador").valueAsNumber;
    const salida = document.getElementById("cuenta_atras");

    salida.textContent = num;

    const intervalo = setInterval(() => {
        salida.textContent = num;

        if (num <= 0) {
            clearInterval(intervalo);
            salida.textContent = "¡Tiempo terminado!";
        }
        num--;
    }, 100);
}

function Ejercicio7() {
    let colores = document.getElementById("colores");
    let boton = document.getElementById("boton_parar")
    let intervalo;
    const INTERVALO_MS = 10;

    if (boton.disabled) {
    boton.disabled = false;
    boton.textContent = "Parar de cambiar los colores";
    }

    const colorAleatorio = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b}`;
    };

    const cambiarColor = () => {
        colores.style.backgroundColor = colorAleatorio();
    };

    intervalo = setInterval(cambiarColor, INTERVALO_MS);
    
    boton.addEventListener('click', () => {
        clearInterval(intervalo);
        boton.disabled = true;
        boton.textContent = "Detenido";
    });
}

function Ejercicio8(accion) {
    if (!Ejercicio8.numeros) Ejercicio8.numeros = [];
    if (!Ejercicio8.intervalo) Ejercicio8.intervalo = null;

    const output = document.getElementById("bingo");

    if (accion === 'parar') {
        clearInterval(Ejercicio8.intervalo);
        output.textContent = "\nBingo detenido.";
        return;
    }

    clearInterval(Ejercicio8.intervalo);
    Ejercicio8.numeros = [];
    output.textContent = "Iniciando bingo...\n";

    Ejercicio8.intervalo = setInterval(() => {
        if (Ejercicio8.numeros.length >= 90) {
            output.textContent = "\n¡Fin del bingo!";
            clearInterval(Ejercicio8.intervalo);
            return;
        }

        let num;
        do {
            num = Math.floor(Math.random() * 90) + 1;
        } while (Ejercicio8.numeros.includes(num));

        Ejercicio8.numeros.push(num);
        output.textContent = "Número sorteado: " + num + "\n";
    }, 300);
}

function Ejercicio9 () {
    const output = document.getElementById("sorteo");

    const nombres = ["Ana", "Luis", "Marta", "Carlos", "Lucía"];

    const elegido = nombres[Math.floor(Math.random() * nombres.length)];

    output.textContent = "Lista de nombres: " + nombres.join(", ") + "\n";
    output.textContent += "El nombre elegido es: " + elegido;
}

function Ejercicio10() {
    const output = document.getElementById("sorteoInteractivo");
    let nombres = [];

    while(true) {
        let nombre = prompt("Introduce un nombre (vacío o número para terminar): ");
        if (nombre === "" || !isNaN(nombre)) break;
        nombres.push(nombre);
    }

    if (nombres.length > 0) {
        let elegido = nombres[Math.floor(Math.random() * nombres.length)];
        output.textContent = "Nombres introducidos: " + nombres.join(", ") + "\n";
        output.textContent += ". El nombre elegido es: " + elegido;
    } else {
        output.textContent = "No se introdujo ningún nombre";
    }
}