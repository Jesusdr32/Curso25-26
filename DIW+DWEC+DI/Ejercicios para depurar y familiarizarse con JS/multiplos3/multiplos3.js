// Página que muestra los números del 1 al 100 múltiplos de 3
// Escribe el resultado en el div de identificador pizarra

const inicio = 1;
const fin = 100;


function calcularMultiplos3(){
let ultimo = 0;
for (let n=inicio; ultimo < fin; n ++) {
    ultimo = n*3;
    console.log(" " + ultimo + "; ")
}
}

