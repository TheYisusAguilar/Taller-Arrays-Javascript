//Ejercicio 5: Filtrar elementos de un array
//• Crea un array con nombres de personas y sus edades.
//• Filtra el array para obtener solo los nombres de las personas mayores de edad (por ejemplo, usando filter).
//• Imprime los nombres de las personas que cumplen con el criterio.
//• Usa un bucle para recorrer el array filtrado y realizar alguna acción con cada elemento (por ejemplo, mostrar un mensaje).

let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 18 },
    { nombre: "Pedro", edad: 30 },
    { nombre: "Ana", edad: 16 }
];

let personasMayores = personas.filter(persona => persona.edad >= 18);

console.log("Nombres de personas mayores de edad:");
personasMayores.forEach(persona => console.log(persona.nombre));

console.log("Mensajes para personas mayores de edad:");
personasMayores.forEach(persona => {
    console.log(`Hola, ${persona.nombre}. ¡Eres mayor de edad!`);
});
