/*
NORMAS
-------
Piedra gana a tijera y pierde con papel
Papel gana a piedra y pierde contra tijera
Tijera gana a pepel y pierde contra piedra
Si sale lo mismo empate

*/

var opciones = ["piedra","papel","tijera"];
var rnd_cpu, rnd_usr;

function get_randoms(){
    // Cogemos una opción randomizada para la CPU
    rnd_cpu = Math.floor((Math.random() * 3 ) );

    // Cogemos una opción randomizada para el usuario
    rnd_usr = Math.floor((Math.random() * 3 ) );    
}



function winner(){
    get_randoms();    
    let op1 = rnd_cpu;
    let op2 = rnd_usr;
    console.log("Ha jugado como: " + opciones[op1]);
    console.log("Tu adversario es: " + opciones[op2]);
    if (op1 == op2) {
        console.log("Empate");
    }else if (op1 == 0 && op2 == 1) {
        console.log("Has perdido contra " + opciones[op2]);
    
    }else if (op1 == 0 && op2==2) {
        console.log("Has ganado contra " + opciones[op2]);    
    }else if (op1 == 1 && op2 == 2) {
        console.log("Has perdido contra " + opciones[op2]);
    }else if (op1 == 1 && op2==0) {
        console.log("Has ganado contra " + opciones[op2]);    
    }else if (op1 == 2 && op2 == 0) {
        console.log("Has perdido contra " + opciones[op2]);
    }else if (op1 == 2 && op2==1) {
        console.log("Has ganado contra " + opciones[op2]);
    }
}

winner();


