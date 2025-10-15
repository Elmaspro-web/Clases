// Haz una función que como parámetro reciba un array de números y
// obtenga el número que menos repeticiones haya tenido. En caso de
// empate devuelve el número más pequeño.

// Creamos el array de numeros
let arrayNumero = [1,2,5,4,5,1,6];

// Creamos la funcion para buscar el numero con menos repeticiones
function menorRepeticion(arrayNumero)
{
    // Inicializamos el contador de rrepeticiones
    let cont = [];

    // Hacemos un forof para guardar cuantas veces se repite el numero
    for (const numero of arrayNumero)
    {
        cont[numero] = (cont[numero] || 0) + 1;
    }

    // Inicializamos 2 variables que una sea muy grande para que pueda entrar en el if de abajo
    // porque nos ayudara a buscar el de menor repetición
    // Ademas inicializamos el resultado de que numero sera el que menos repeticiones tendra
    let guardado = Infinity;
    let result = 0;

    // Hacemos otro forin que lea el contador (Numeros de repeticiones) y busque el menor gracias a un if
    for (const numero in cont)
    {

        // Este if lo que hace es guardar en "guardado" el numero mas pequeño siempre entrara porque el numero sera
        // menor a Infinito entonces se guarda de 1 en uno hasta que encuentra el menor. En este caso tambien vamos cuardando
        // que valor es el menor: 1:2 2:2 4:1 5:2 por lo tanto se quedara con el 4 en el result y el 1 es el que detectara como menor
        if (cont[numero] < guardado)
        {
            // Vamos almacenando el menor valor
            guardado = cont[numero];
            result = numero;
        }
    }

    // Devolvemos el resultado
    return result;
}


// Llamamos a la consola para que nos muestre que numero se mostrara por pantalla
console.log(menorRepeticion(arrayNumero))