//Ejercicio 6: Combinar dos arrays
//• Crea dos arrays con diferentes elementos.
//• Combina los dos arrays en un solo array nuevo.
//• Mantén el orden original de los elementos en el array combinado.


let array1 = [1, 2, 3];
let array2 = ['a', 'b', 'c'];

let arrayCombinado = [...array1, ...array2];

console.log("Array combinado:", arrayCombinado);
