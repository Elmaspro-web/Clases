// Implementar la función que toma como argumento una array de
// enteros o string, pueden ser híbrido, y devuelve una array de
// elementos sin ningún elemento repetido y preservando el orden
// original de los elementos.

// Inicializamos el array de enteros
const arrayEntero = [1,1,2,3,7,4];

// Creamos la función que devolverá el array sin elementos duplicados
function sinRepetidos(arrayEntero)
{

    // Usaremos el set que automáticamente te elimina los elementos repetidos
    // y además los pone en el orden de inserción, si quisiéramos que estuviese ordenado usaríamos el .sort((a,b) => a - b)
    let set = new Set(arrayEntero);

    //usar los 3 ... hace que el set se concierta en un array y asi pasárselo y que devuelva el propio array
    arrayEntero = [...set];
    console.log(arrayEntero);

    return "";
}

// Mostramos por consola el resultado del array sin duplicados
console.log(sinRepetidos(arrayEntero));