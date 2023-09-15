//hacer una funcion para sacar una varianza 
function media(datos) {

    function sumatoria(serie) {
        let suma = 0
        serie.forEach(numero => {
            suma += numero;
        });    

        return suma;
    }
    return sumatoria(datos)/ datos.length
}

function mediana(datos) {
    const largo = datos.length;
    if ( largo%2 == 0) {
        let mitadArreglo = largo /2;
        let anterior = mitadArreglo -1;
        let siguiente = mitadArreglo;
        console.log(datos[anterior]);
        console.log(datos[siguiente]);
        return (datos[anterior]+ datos[siguiente])/2
    } else {
        let mitadArreglo = Math.round(largo /2);
        return datos[mitadArreglo -1]
    }
    
}

function varianza(datos) {
    const medi = media(datos);

    // Calcular la suma de los cuadrados de las diferencias
    let suma = 0;
    for (let i = 0; i < datos.length; i++) {
        const resta = datos[i] - medi;
        suma += Math.pow(resta, 2);
    }

    // Calcular la varianza dividiendo por n - 1 (para la varianza muestral)
    const observaciones = datos.length;
    const num = observaciones - 1;
    const total = suma / num;
    return total;
}

const misDatos = [5,6,7,19,3];
console.log(`La media de ${misDatos} es ${media(misDatos)}`);
console.log(`La mediana es : ${mediana(misDatos)}`);
console.log(`La varianza es: ${varianza(misDatos)}`);