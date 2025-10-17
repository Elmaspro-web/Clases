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
                if ((arrayEnteros[i] + arrayEnteros[j] + arrayEnteros[k]) === 0)
                {

                    // Creamos el array que tendrá los 3 valores que den 0 y se ordenan para ser comparados bien
                    let valores = [arrayEnteros[i], arrayEnteros[j], arrayEnteros[k]].sort((a,b)=>a-b);

                    // Es un if que tiene que dar FALSE, como lo hace, facil: guardar.some hace que conque 1 valor de 1 condicion ya vale,
                    // .some(... => condicion) los ... son cualquier nombre.
                    // Luego le añades que la condición sea: que si (trio.every(...) => ...) donde every hace que sean toooodos los valores
                    // (a cada valor se le asigna: POSICION y VALOR y luego saca una condicion de que cuando posición sea igual a valores[valor] guarde,
                    // que pasa que esto guarda valores duplicados y por eso de debe negar al principio
                    //
                    // Ejemplo: encuentra que 1,2,-3 === 0, por tanto valores es [1,2,-3]. Bien guardar esta sin valores por tanto va a entrar 100%,
                    // imaginemos que no, y el valor ya esta metido y es identico, hace que "trio" que seria [-3,1,2], verfique si el proximo que se le añade ([-3,1,2])
                    // es identico, como lo hacemos: con el .every mira TODOS los valores, 0 = -3, 1 = 1, 2 = 2, si valor (-3, 1 o 2) es igual al nuevo array que entra
                    // con valores -3 === (valores[0] = -3) y esto si se cumple las 3 veces hace que de true pero como esta puesto el !, significa que no se añade uno nuevo.
                    if (!guardar.some(trio => trio.every((valor, posicion) => valor === valores[valor])))
                    {
                        guardar.push(valores);
                        console.log(guardar);
                    }

                }
            }
        }
    }
    return "";
}

console.log(sumaCero(sumaCero(arrayEnteros)))