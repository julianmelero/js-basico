// Declaración

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];


// Recoger datos
consologe.log(frutas);
frutas[0];

// Longitud de un Array
frutas.length();

// Método Agregar al Array
frutas.push("Uva");

// Quitar último elemento
frutas.pop();

// Agregar elemento al inicio
frutas.unshift("Sandia");

// Eliminar elemento del inicio
frutas.shift();

// Conocer la posición
frutas.indexOf("Cereza"); // 2

// Métodos Recorrido

var articles = [
    { nombre: "Bici", costo: 3000},
    { nombre: "TV",   costo: 2500},
    { nombre: "Libro",   costo: 320},
    { nombre: "Celular",   costo: 10000},
    { nombre: "Laptop",   costo: 20000},
    { nombre: "Teclado",   costo: 500},
    { nombre: "Audífonos",   costo: 1700},
]

// Filter
var filtro = articles.filter(function(article){ 
    return article.costo <= 500;
});

filtro;

// Map Regresa el nombre de los artículos
var nombreArticulos = articles.map( function (article) {
    return nombreArticulos.nombre;
});

// Find Devuelve el articulo con ese nombre
var findart = articles.find( function (article) {
    return article.nombre === "Laptop";
});

// {nombre: "Laptop", costo: 20000}

// Foreach
articules.foreach(function (article) {
    article.nombre;
});

articles.forEach(article => {
    console.log(article.nombre);
});

// Some
var artbarato = articles.some( function (article) {
    return article.costo <= 700;
});
// Devuelve True o False

// .push()
// El método .push() nos permite agregar uno o más elementos al final de un array.

// .shift()
// Ahora pasemos a la otra cara de la moneda donde necesitamos eliminar un elemento del array. .shift() eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.

// .pop() eliminará el último elemento de un array. 