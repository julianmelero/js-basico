// Scope Global
// Son las variables y funciones

// Scope Local

// Las variables que están dentro de una función

// Variable Scope Global
var miNombre = "Julián";

function nombre() {
    // Variables Scope Local
    var miApellido = "Melero";
    console.log(miNombre + " " + miApellido);
}

nombre(); // Julián Melero

console.log(miApellido); // ERROR undefined miApellido