// For Loop

var estudiantes = ["María", "Sergio","Rosa","Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

// Classic for
for (let i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);    
}

// For of

for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);    
}