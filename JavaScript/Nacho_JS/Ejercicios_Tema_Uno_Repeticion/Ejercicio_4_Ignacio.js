// Dada un array de enteros, encuentra los números que aparecen
// un número impar de veces.

// Inicializamos la variable del array
const arrayEnteros = [1,3,3,3,2];

// Creamos la función que lo leerá
function aparecenImpar(arrayEnteros)
{

    // Inicializamos la variable que contara cuantas veces aparece cada valor
    let count = [];

    // Este for cuenta cuantas veces aparece cada número
    for (const numero of arrayEnteros)
    {
        count[numero] = (count[numero] || 0) + 1;
    }

    // Y este otro for consiste en que mira cada posición
    for (const numero in count)
    {

        // Este if comprueba que sean impares
        if (!(count[numero] % 2 === 0))
        {
            console.log(numero);
        }
    }
    return "";
}

// Sacamos por consola el resultado
console.log(aparecenImpar(arrayEnteros));