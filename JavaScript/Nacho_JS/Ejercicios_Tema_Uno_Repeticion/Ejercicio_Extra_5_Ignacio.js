// Descripción:
// Se te da un arreglo de intervalos, donde cada intervalo es [inicio, fin].
// Debes fusionar todos los intervalos que se superponen y devolver el
// resultado como un nuevo arreglo.
// Objetivo:
// Combinar los intervalos superpuestos en intervalos continuos más
// grandes.

// Inicializamos la variable que guardara los array de arrays
const intervalos =
    [
        [1,5],
        [7,4],
        [2,5]
    ];

// Creamos la función intervalosSuperpuestos
function intervalosSuperpuestos(intervalos)
{
    for (let i = 0; i < intervalos.length; i++) {
        let [inicio, fin] = intervalos[i];
        if (inicio > fin)
        {
            intervalos[i] = [fin, inicio];
        }
    }

    intervalos.sort((a,b) => a[0] - b[0]);
    let resultado = [];
    let actual = intervalos[0];

    // Recorrer el resto y comparar
    for (let i = 1; i < intervalos.length; i++) {
        let [inicio, fin] = intervalos[i];

        // Si el inicio del nuevo intervalo está dentro del actual (se superponen)
        if (inicio <= actual[1]) {
            // Fusionar: actualizar el final si es más grande
            actual[1] = Math.max(actual[1], fin);
        } else {
            // Si no se superponen, guardamos el actual y pasamos al siguiente
            resultado.push(actual);
            actual = intervalos[i];
        }
    }

    // Agregar el último intervalo
    resultado.push(actual);

    return resultado;
}

console.log(intervalosSuperpuestos(intervalos));