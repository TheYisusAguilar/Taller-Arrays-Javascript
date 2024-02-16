//Ejercicio 4: Ordenar un array
//• Crea un array con números aleatorios.
//• Ordena el array de forma ascendente.
//• Ordena el array de forma descendente.
//• Imprime el array antes y después de ordenarlo.


let numAleatorios = [9, 2, 3, 1, 4, 5, 8, 6];

console.log("Array antes de ordenarlo:", numAleatorios);

numAleatorios.sort((a, b) => a - b);
console.log("Array ordenado de forma ascendente:", numAleatorios);

numAleatorios.sort((a, b) => b - a);
console.log("Array ordenado de forma descendente:", numAleatorios);