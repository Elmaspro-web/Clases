// Descripción:
// Se te da un arreglo de enteros no negativos donde cada valor representa la
// altura de una línea vertical sobre el eje X. El objetivo es encontrar dos líneas
// que, junto con el eje X, formen un contenedor que pueda contener la mayor
// cantidad posible de agua.
// Objetivo:
// Maximizar el área formada por dos líneas y el eje X



// he entendido que si tenemos |_____|_____| cojamos los extremos porque al unirlos forman un cuadrado más grande

const arrayArea = [1,2,3,4,5,6,7]

function masArea(arrayArea)
{
    // Establecemos valores del resultado y de 1 de los 2 datos que se deben comparar
    let resultado = "";
    let maximo = -Infinity;

    //Creamos 2 for para que pasen por todos los valores repetidamente
    for (let i = 0; i <= arrayArea.length; i++)
    {
        for (let j = i+1; j <= arrayArea.length; j++) {

            // Formula del área maxima = Base * Altura
            let total = (j - i) * Math.min(arrayArea[i], arrayArea[j]);

            // Comparamos el resultado del área con el maximo que solo entrara lo más alto
            if (total > maximo)
            {

                // Igualamos para que el máximo sea el total más alto y damos el resultado por variable
                maximo = total;
                resultado = `${arrayArea[i]} y ${arrayArea[j]} son los maximos`;
            }
        }
    }
    return resultado;
}

// Imprimimos por pantalla el resultado
console.log(masArea(arrayArea))