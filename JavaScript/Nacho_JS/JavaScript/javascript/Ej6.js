
// Escribe una función que tome un parámetro positivo num y devuelva
// su persistencia multiplicativa, que es el número de veces que debes
// multiplicar los dígitos de num hasta llegar a un solo dígito.

let numero = 122222;

function disminuir(numero)
{
    let digito = 0;
    let cont = 0
    let resultado = 1;
    let mult = 1;
    while (numero > 10)
    {
        while (numero > 0)
        {
            digito = Math.floor(numero % 10);
            numero = Math.floor(numero / 10);
            cont++;
            resultado = resultado * digito;
        }
        mult++;
        numero = resultado;
        resultado = 0;
    }

    return mult;
}

console.log(disminuir(numero));