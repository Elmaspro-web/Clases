
// Haz una función que como parámetro reciba un array de números y
// obtenga el número que menos repeticiones haya tenido. En caso de
// empate devuelve el número más pequeño.

let numArray = [1,1,3,3,3,6,6];

function rep(numArray)
{
    let count = [];

    for (let numero of numArray) 
    {
        count[numero] = (count[numero] || 0) + 1;
    }

    let minimo = Infinity;
    let result = 0;

    for (let numero in count)
    {
        let normal = count[numero];
        let numeroG = parseInt(numero);

        if (normal < minimo || (normal === minimo && numeroG < result))
        {
            minimo = normal;
            result = numero;
        }
    }

    return result;
}

console.log(rep(numArray));