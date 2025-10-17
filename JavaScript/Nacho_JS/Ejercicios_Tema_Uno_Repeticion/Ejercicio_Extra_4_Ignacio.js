// Descripción:
// Dado un arreglo de enteros nums, devuelve todos los tríos únicos [a, b,
// c] tales que a + b + c == 0.
// Objetivo:
// Encontrar todos los conjuntos únicos de tres números cuya suma sea cero.

// Inicializamos el array
const arrayEnteros = [1,-3,1,2,3, -2,0] // a + b + c = 0

// Iniciamos la funcion que detectara si una suma de 3 da 0
function sumaCero(arrayEnteros)
{
    // Creamos los 2 array que guardaran datos de los trios
    let guardar = [];
    let valores = [];

    // Añadimos 3 for para que haya 3 valores, y se inicializan desde el anterior para que no se use el mismo número 3 veces y siempre sean el siguiente
    for (let i = 0; i <= arrayEnteros.length; i++)
    {
        for (let j = i; j <= arrayEnteros.length; j++)
        {
            for (let k = j; k <= arrayEnteros.length; k++)
            {

                // con el if comparamos 3 números en escalada para ver si son 0
                if ((arrayEnteros[i] + arrayEnteros[j] + arrayEnteros[k]) === 0 && i !== j && i !== k && j !== k)
                {
                    console.log(i, j, k);
                }
            }
        }
    }
    return "";
}

console.log(sumaCero(sumaCero(arrayEnteros)))