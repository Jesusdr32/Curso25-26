let nombrecampos = cabecera.split('');

function crearListaDireccionesConForOfEntries() {
    let listaRegistros = [];
    let lineasDirecciones = listaUsuarios.split('\n');

    for (let linea of lineasDirecciones) {
        let valores = linea.split(';');
        let dir = {};

        for (const [i, valor] of valores.entries()) {
            dir[nombrecampos[i]] = valor;
        }
        listaRegistros.push(dir)
    }
    console.log(listaRegistros);
    return listaRegistros;
}

function generarListaConCampos() {
    
}