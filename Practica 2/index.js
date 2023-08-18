let frutas = ["Banana", "Manzana", "Pera"]

console.log(frutas[2]); //Accede de manera individual a un valor del array

for (let fruta of frutas) {
    console.log(fruta);
    
}
/*frutas.push("Fresa"); //agregar un nuevo valor al array
frutas.pop(); //Eliminar un valor del array
frutas.unshift("Melocoton")//Agregar un nuevo valor al princiopio
frutas.reverse();//Impreme los valores arrevez de su posicion
console.log(frutas.includes("Melocoton")); //Impreme si esta en la lista o no  */

frutas.forEach(i => console.log(i))