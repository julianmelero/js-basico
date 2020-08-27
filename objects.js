// Creación de objetos
var objeto = {};

var miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    anyo:   2020,
    // Método de objeto
    detalleDelAuto : function () {
        console.log(`Auto ${this.modelo} ${this.anyo}`);
    }
};

console.log(miAuto.marca);

miAuto.detalleDelAuto();

