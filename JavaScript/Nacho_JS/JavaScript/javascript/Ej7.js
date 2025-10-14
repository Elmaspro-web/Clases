
// Escribe una función que tenga como parámetro un array de números
// enteros. Tu trabajo es tomar esa array y encontrar un índice N en el
// que la suma de los enteros a la izquierda de N sea igual a la suma de
// los enteros a la derecha de N. Si no hay ningún índice que haga que
// esto ocurra, devuelve -1. Si se le da un array con múltiples
// respuestas, devuelve el menor índice correcto.

    let arrayEnteros = [4,1,1,1,1,8];
    let sumIzq = 0;
    let sumDer = 0;
    let arrayReves = arrayEnteros.toReversed();
    let max = 0;

function itinerar(arrayEnteros) {
    for (let i = 0; i < arrayEnteros.length; i++)
    {
        max = max + arrayEnteros[i];
    }
    for (let i = 0; i < arrayEnteros.length; i++) {
        sumDer = 0;
        sumIzq = sumIzq + arrayEnteros[i];
        for (let j = 0; j < arrayEnteros.length; j++) {
            sumDer = sumDer + arrayReves[j];

            if (sumIzq === max)
            {
                return -1;
            }
            if (sumIzq === sumDer) {
                console.log("Son iguales");
                return sumDer;
            }
        }
    }
}

console.log(itinerar(arrayEnteros));