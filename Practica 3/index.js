// Crear dos arrays vacíos
let primerArray = [];
let segundoArray = [];


for (let i = 1; i <= 100; i++) {
    primerArray.push(i);
}

for (let i = 101; i <= 200; i++) {
    segundoArray.push(i);
}

const mediaPrimerArray = calcularMedia(primerArray);
const mediaSegundoArray = calcularMedia(segundoArray);

// Función para calcular la media de un array
function calcularMedia(array) {
    const suma = array.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    return suma / array.length;
}

// Imprimir los resultados
console.log("Primer Array:", primerArray);
console.log("Segundo Array:", segundoArray);
console.log("Media del Primer Array:", mediaPrimerArray);
console.log("Media del Segundo Array:", mediaSegundoArray);