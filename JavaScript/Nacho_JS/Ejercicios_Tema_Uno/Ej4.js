
// Dada un array de enteros, encuentra todo los números que aparecen
// un número impar de veces.

let arrayEnteros = [1,1,2,3,4,3,3,5,5,5,1];

function imparAparicion(arrayEnteros)
{
    let count = {};
    let resul = [];
    for (let numero of arrayEnteros)
    {
        count[numero] = (count[numero] || 0) + 1;
    }

    for (let numero in count)
    {
        let numeroRep = count[numero];
        let numeroReal = parseInt(numero);

        if (numeroRep % 2 !== 0)
        {
            resul.push(numeroReal);
        }
    }
    return resul;
}
console.log(imparAparicion(arrayEnteros));