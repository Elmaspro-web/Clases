// Descripción:
// Se te da un arreglo de enteros nums y un entero target. Debes encontrar
// dos números distintos en nums cuya suma sea igual a target. Devuelve sus
// índices como un arreglo [i, j]. Se asume que existe exactamente una
// solución.

// Objetivo:
// Encontrar los índices i y j donde nums[i] + nums[j] === target.

// Inicializamos la variable que queremos que de como objetivo y el array de números
const [target, arrayNumero] = [12, [1,6,3,4,11]];

// Inicializamos la función de busqueda
function busqueda(target, arrayNumero)
{

    // Recorremos el primer for para que pase por todos los valores
    for (let i = 0; i < arrayNumero.length; i++)
    {
        // Este segundo for recorre por cada valor todos los demás, se inicializa el i+1 para que no detecte el mismo valor, me explico si target es 12 y
        // en la primera posición tengo un 6, la i=0 y j=0 es también 6 y sus sumas es 12, pero si inicializas j desde i+1, siempre probará nuevos números
        for (let j = i+1; j < arrayNumero.length; j++)
        {
            // Aquí se comprueba que sean iguales y si son iguales devuelve el return con el mensaje que se desee
            if (arrayNumero[i] + arrayNumero[j] === target)
            {
                return `El numero ${target} se ha encontrado gracias a las sumas de los índices [${i}, ${j}];`
            }
        }
    }

    return `El numero ${target} no ha sido encontrado por la suma dde 2 numeros distintos de este array [${arrayNumero}]`;
}

// Mostramos por pantalla que números dan la suma del target
console.log(busqueda(target, arrayNumero))

