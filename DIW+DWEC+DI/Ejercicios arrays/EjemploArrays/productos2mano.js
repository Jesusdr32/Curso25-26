let nombrecampos = cabecera.split(',');

let listaParaEscribir; 


function crealistaproductosConFor() {
    
    let productos = [];
    let lineasproductos = listaproductos.split('\n');

    for (let l=0; l< lineasproductos.length; l++){
        let valores=lineasproductos[l].split(',');

        let prod = {};

        for (let v=0; v < valores.length; v++){
            prod[nombrecampos[v]] = valores[v];
        }
        productos.push(prod);
    }
    console.log(productos);    
    return productos;
}

function crealistaproductosConForOfEntries() {
    
    let productos = [];
    let lineasproductos = listaproductos.split('\n');

    for (let linea of lineasproductos) {
        let valores = linea.split(',');
        let prod = {};

        for (const [i, valor] of valores.entries()) {
            prod[nombrecampos[i]] = valor;
        }
        productos.push(prod);
    }
    console.log(productos);    
    return productos;
}

function ObjetoProducto (cod,nombre,desc,cate,prec,city) {
    this.codigo= cod;
    this.nombre_producto = nombre;
    this.descripcion = desc;
    this.categoria = cate;
    this.precio = prec;
    this.ciudad = city;
} 

function crealistaproductosConConstructores() {
    
    let productos = [];
    let lineasproductos = listaproductos.split('\n');

    for (let linea of lineasproductos) {
        let valores = linea.split(',');

        let prod = new ObjetoProducto(...valores);

        productos.push(prod);
    }
    console.log(productos);    
    return productos;
}

let encontrarProductoPorCodigo = (cod) => { return listaParaEscribir.find((p) => p.codigo == cod);}

let primeroPorPrecio = () => {
    let listaOrdenada = listaParaEscribir.slice().sort((a,b) => {return parseFloat(a.precio) - parseFloat(b.precio)});
    return listaOrdenada[0];
}

let losDeModa = () => {
    return listaParaEscribir.filter((p)=> p.categoria == 'moda');
}

function escribirLista(lista) {
    lista.forEach(prod => {
        document.writeln(`<p> ${Object.values(prod).join('   ')} </p>`)
    });
    document.writeln(`<hr/>`);
}



listaParaEscribir= crealistaproductosConFor();
escribirLista(listaParaEscribir);

listaParaEscribir= crealistaproductosConForOfEntries();
escribirLista(listaParaEscribir);

listaParaEscribir= crealistaproductosConConstructores();
escribirLista(listaParaEscribir);

let porCodigo = encontrarProductoPorCodigo("HIG1926-pJ");
console.log("codigo:");
console.log( porCodigo);

let masBarato = primeroPorPrecio();
console.log("más barato: "); 
 console.log(masBarato);

let porCategoria = losDeModa();
console.log("los de moda: ");
console.log(porCategoria);
