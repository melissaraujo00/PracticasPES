//Llamada antes de iniciarlizar la funcion
/*saludar();

//Funcion de primer orden se puede llamar o antes de haberla creada
function saludar() {
    console.log("Hola Mundo");
}

//Llamada despues de inicializada
saludar();

//Funcion Anonima
const saludarAnonimo = function() {
    saludar()    
}

//Llamada a funcion anonima
saludarAnonimo()

//objeto
const usuario ={
    nombre: 'Melissa',
    correo: 'Sin Agregar'
}

function agregarCorreo(nuevoCorreo) {
    usuario.correo = nuevoCorreo
}

console.log(usuario);
agregarCorreo('daliarivas11@gmail.com');
console.log(usuario);

let a = 5;
let b = 10;

function suma() {
    return a+b;
}

console.log(suma()); 

const suma = function(a,b) {
    return a + b;
}

console.log(suma(10,10));

//Crear funcion que permita determinar una multiplicacion a partir se sumas 

const multiplicacion = function suma(a,b) {
    return (b != 0) ? a + suma(a,b-1):0
}

console.log(multiplicacion(5,2));

//Funciones recursivas
let numero = 0;
while (numero<10) {
    console.log(numero);
    numero++
}

function contador(numero = 0) {
    if (numero >= 10) {
        return 
    }
    console.log(numero);
    contador(numero+1)
}
console.log("Funcion recursiva");
contador()  */

//funciones anidaddas
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

const misDatos = [5,6,7,19,3];
console.log(`La media de ${misDatos} es ${media(misDatos)}`);
console.log(mediana(misDatos));