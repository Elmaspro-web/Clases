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
        [7,6],
        [1,2]
    ];

// Creamos la función intervalosSuperpuestos
function intervalosSuperpuestos(intervalos)
{

    // Inicializamos variables para su futuro uso
    // arrayN es guardar todos los números de los array de arriba
    // guardarMenor se inicializa en Infinito para que detecte el menor la primera vez seguro
    // guardarMayor se inicializa en -Infinito para que el primer mayor entre seguro
    let arrayN = [];
    let guardarMenor = Infinity;
    let guardarMayor = -Infinity;

    // Creamos el for que primero me divide el array de arrays en números simples
    for (const numero in intervalos) {
        for (let i = 0; i < intervalos.length-1; i++)
        {
            // Añade 1 a 1 los valores numéricos por orden empezando en este caso en el 1 luego el 5,7,6,1 y por último el 2.
            arrayN.push(intervalos[numero][i]);
            for (let j = 0; j < arrayN.length; j++)
            {
                // en estos for va guardando el primer valor que coge y comprueba primero el 1 que entra en ambos
                // luego con el 5 como 5 es mayor que uno se salta el primer if, pero como es mayor que el 1 entra en el segundo,
                // provocando que la variable que guarda el mayor sea ahora 5, ahora con el 7 pasa lo mismo en el primer if no entra porque el 7 es mayor,
                // pero en el segundo entra porque 7 > 5, asi sucesivamente hasta el final.
                if(arrayN[j] < guardarMenor)
                {
                    guardarMenor = arrayN[j];
                }
                if(arrayN[j] > guardarMayor)
                {
                    guardarMayor = arrayN[j];
                }
            }
        }
    }
    return `${guardarMenor}, ${guardarMayor}`;
}

console.log(intervalosSuperpuestos(intervalos))