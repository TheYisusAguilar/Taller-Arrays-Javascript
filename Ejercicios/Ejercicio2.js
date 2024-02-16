//Ejercicio 2: Agregar y eliminar elementos de un array
//• Crea un array vacío.
//• Agrega al menos 3 elementos al array utilizando diferentes métodos (por ejemplo, push, unshift).
//• Elimina el último elemento del array.
//• Elimina un elemento específico del array por su índice.
//• Imprime el array final después de las modificaciones.

let frutas = [];

frutas.push("banana","kiwi","mango");

frutas.pop();

let indice = frutas.indexOf("kiwi");
frutas.splice(indice,1);

console.log(frutas);
