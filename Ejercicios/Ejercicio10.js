//Ejercicio 10: Convertir un array en un objeto
//• Crea un array con elementos de diferentes tipos.
//• Convierte el array en un objeto, donde cada elemento del array sea una propiedad del objeto.

let array = ['nombre', 25, true, { id: 1 }];

let objeto = array.reduce((acc, elemento, index) => {
    acc[`propiedad${index + 1}`] = elemento;
    return acc;
}, {});

console.log("Objeto resultante:", objeto);
