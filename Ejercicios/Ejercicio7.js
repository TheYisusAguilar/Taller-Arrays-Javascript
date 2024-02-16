//Ejercicio 7: Eliminar elementos duplicados de un array
//• Crea un array con elementos duplicados.
//• Elimina los elementos duplicados del array.

let arrayConDuplicados = ["a","a",1,1,2,2,"b","b","c","c",5,5];

let arraySinDuplicados = Array.from(new Set(arrayConDuplicados));

console.log("Array sin duplicados:", arraySinDuplicados);
