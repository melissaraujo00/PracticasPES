let numeros = [];
let otrosNumeros = [];
let arrayfinal =[];
for (let i =1 ; i<=100; i++) {
    let mensaje = `El valor es: ${i}`
    numeros.push(mensaje)
    
}
for (let i =101 ; i<=200; i++) {
    let mensaje = `El valor es: ${i}`
    otrosNumeros.push(mensaje)
    
}

arrayfinal = [...numeros,...otrosNumeros]//agregar los valores a un array

arrayfinal.forEach((i)=>{
    console.log(i)
} )