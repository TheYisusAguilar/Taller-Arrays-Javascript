//Ejercicio 9: Agrupar elementos de un array por una propiedad
//• Crea un array con objetos que tengan una propiedad en común (por ejemplo, color, tamaño, tipo).
//• Agrupa los elementos del array por el valor de la propiedad común.

let objetos = [
    { id: 1, color: 'marron' },
    { id: 2, color: 'negro' },
    { id: 3, color: 'rojo' },
    { id: 4, color: 'blanco' },
    { id: 5, color: 'azul' }
];

let grupos = objetos.reduce((acc, obj) => {
    const color = obj.color;
    if (!acc[color]) {
        acc[color] = [];
    }
    acc[color].push(obj);
    return acc;
}, {});

console.log("Grupos por color:", grupos);
