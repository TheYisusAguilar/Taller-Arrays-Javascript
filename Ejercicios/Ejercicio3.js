//Ejercicio 3: Buscar un elemento en un array
//• Crea un array con al menos 10 elementos de diferentes tipos (números, strings, booleanos).
//• Busca un elemento específico en el array por su valor.
//• Imprime la posición (índice) del elemento encontrado o un mensaje si no se encuentra.
//• Bonus: Usa diferentes métodos para realizar la búsqueda (por ejemplo, indexOf, find).


let miArray= [1, 'two', 3, 'four', 5, 'six', 7, 'eight', 9, true];

let elementoBuscado = "four";

let indice = miArray.indexOf(elementoBuscado);

if(indice !== -1) {
    console.log(`El elemento ${elementoBuscado} se encuentra en el índice ${indice}`);
} else {
    console.log(`El elemento ${elementoBuscado} no se encuentra en el array`);
}

const  buscarElemento = miArray.find((element) => element === elementoBuscado);
console.log(elementoBuscado);
