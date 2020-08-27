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