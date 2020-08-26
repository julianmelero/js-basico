/*
NORMAS
-------
Piedra gana a tijera y pierde con papel
Papel gana a piedra y pierde contra tijera
Tijera gana a pepel y pierde contra piedra
Si sale lo mismo empate

*/

var opciones = ["piedra","papel","tijera"];

// Cogemos una opción randomizada para la CPU
var rnd_cpu = Math.floor((Math.random() * 3 ) + 1);

// Cogemos una opción randomizada para el usuario
var rnd_usr = Math.floor((Math.random() * 3 ) + 1);


function winner(op1,op2){
    if (op1 == op2) {
        console.log("Empate");
    }else if (op1 == 1 && op2 == 2) {
        console.log("Has perdido contra la " + opciones[rnd_cpu]);
    
    }
}

winner(rnd_usr,rnd_cpu);


