
// Haz una función que pueda tomar cualquier número entero no
// negativo como argumento y devolverlo con sus dígitos en orden
// descendente. Esencialmente, reordenar los dígitos para crear el
// mayor número posible.

let numeroEntero = 11352581;

function mayorMenor(numeroEntero)
{
    let arrayNumero = [];
    if (numeroEntero>=0)
    {
        let decimal = 0;
        while (numeroEntero >= 1)
        {
            decimal++;
            arrayNumero.push(Math.floor(numeroEntero % 10));
            numeroEntero = Math.floor(numeroEntero / 10);
        }
        arrayNumero.sort((a, b) => a - b);
    }
    return arrayNumero.toReversed();
}
console.log(mayorMenor(numeroEntero));