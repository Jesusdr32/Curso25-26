//Escribir los 20 primeros tenistas con todos sus campos (separados por comas)
function Ejercicio1() {
    let primerosTenistas = [];
    for (let i = 0; i < 20; i ++) {
       primerosTenistas.push(listatenistas[i]);
    }
    document.getElementById("primeros20").textContent = primerosTenistas.map(tenista => `${tenista.idplayer}: ${tenista.name} ${tenista.surname}, ${tenista.played}, ${tenista.victory}, ${tenista.points}`).join('\n\n');
    
}

//Escribir 10 tenistas poco a poco
function Ejercicio2() {
    let primerosTenistas = [];
    for (let i = 0; i < 10; i ++) {
        primerosTenistas.push(listatenistas[i]);
    }
    document.getElementById("apoquito10").textContent = primerosTenistas.map(tenista => `${tenista.idplayer}: ${tenista.name} ${tenista.surname}, ${tenista.played}, ${tenista.victory}, ${tenista.points}`).join('\n\n');
}

//Escribir los datos del tenista con más puntos
function Ejercicio3() {
    let mejoresTenistas = listatenistas.slice().sort((a, b) => b.points - a.points);
    document.getElementById("elmejor").textContent = `${mejoresTenistas[0].idplayer}: ${mejoresTenistas[0].name} ${mejoresTenistas[0].surname}, ${mejoresTenistas[0].played}, ${mejoresTenistas[0].victory}, ${mejoresTenistas[0].points}`;
}

//Escribir los datos de los tenistas que tienen el número de victorias que introduzcas
function Ejercicio4() {
    let numVictorias = document.getElementById("nvictory").valueAsNumber;
    tenistas = listatenistas.filter(tenista => tenista.victory === numVictorias);
    document.getElementById("numvictorias").textContent = tenistas.map(tenista => `${tenista.idplayer}: ${tenista.name} ${tenista.surname}, ${tenista.played}, ${tenista.victory}, ${tenista.points}`).join('\n\n');
}

//Escribir la media de partidos que han jugado todos los tenistas de la lista
function Ejercicio5() {
    let mediaPartidos = 0;
    for (let i = 0; i < listatenistas.length; i ++) {
        mediaPartidos += listatenistas[i].played;
    }
    document.getElementById("media").textContent = (mediaPartidos / listatenistas.length);
}

//Escribir los datos de los tenistas que tienen diez partidos más o menos que la media
function Ejercicio6() {
    let mediaPartidos = 0;
    for (let i = 0; i < listatenistas.length; i ++) {
        mediaPartidos += listatenistas[i].played;
    }
    let tenistas = listatenistas.filter(tenista => ((tenista.played <= (parseInt(mediaPartidos) + 10)) && (tenista.played >= (parseInt(mediaPartidos) - 10))));
    document.getElementById("regulares").textContent = tenistas.map(tenista => `${tenista.idplayer}: ${tenista.name} ${tenista.surname}, ${tenista.played}, ${tenista.victory}, ${tenista.points}`).join('\n\n');
}

//
function Ejercicio7() {

}

//
function Ejercicio8() {
    
}