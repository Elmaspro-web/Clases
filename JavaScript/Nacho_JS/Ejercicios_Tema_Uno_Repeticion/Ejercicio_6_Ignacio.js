// Escribe una función que tome un parámetro positivo num y devuelva
// su persistencia multiplicativa, que es el número de veces que debes
// multiplicar los dígitos de num hasta llegar a un solo dígito.

// Inicializamos el parámetro de número positivo
const numeroPositivo = 1234;

// Creamos la función que calculara cuantas veces se han de multiplicar
// los dígitos hasta que el resultado sea de un dígito
function iteracionMultiplicacion(numeroPositivo)
{
    // Inicializamos variables que usaremos mas adelante
    let resultado = 1;
    let digito = 0;
    let contador = 0;

    // Creamos un while que itere hasta que solo quede un dígito que no puede ser multiplicado por nada
    while (numeroPositivo >= 10)
    {
        // Creamos un while que itere hasta que numero positivo se quede sin dígitos
        while (numeroPositivo > 0)
        {
            //Calculamos el dígito que como en JS no se trunca hay que hacer math.floor
            digito = Math.floor(numeroPositivo % 10);
            numeroPositivo = Math.floor(numeroPositivo / 10);
            resultado = resultado * digito;
        }

        // Aqui hacemos todos los procesos para su evolución
        // en este caso se suma 1 al contador porque se sabe cuantas veces se ha procesado (resultado que pide)
        // y reseteas el resultado para que pueda guardar números desde cero
        contador++;
        numeroPositivo = resultado;
        resultado = 0;
    }
    return contador;
}

// sacamos por consola las veces
console.log(iteracionMultiplicacion(numeroPositivo));