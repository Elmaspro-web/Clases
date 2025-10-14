
// Escriba una función que tome un número decimal como entrada, y
// devuelva el número de bits que son iguales a uno en la
// representación binaria de ese número. Comprueba que la entrada no
// sea negativa.

let numero = 10.75;

function contarUnos(numero)
{

    if (numero < 0) {
        return "Error: introduce un no menores de 0";
    }

    let parteEntera = Math.floor(numero);
    let parteDecimal = numero - parteEntera;

    let binary = parteEntera.toString(2);


    // Esta parte me hace el binario del decimal que es que si es 1,... es 1 en binario asi hasta 0 Ej: 0.7*2 = 1.4 => "1" en binario y 0,4 de resto y luego 0,4*" = 0,8 por tanto es "10" en binario
    let binaryD = "";
    let fraccionActual = parteDecimal;

    for (let i = 0; i < 3; i++)
    {
        fraccionActual = fraccionActual * 2;
        if (fraccionActual >= 1)
        {
            binaryD = binaryD + "1";
            fraccionActual = fraccionActual - 1;
        }
        else
        {
            binaryD = binaryD + "0";
        }
    }

    let binarioCompleto = binaryD ? `${binary}.${binaryD}` : binary;

    let cantidadUnos = binarioCompleto.split("1").length - 1;

    return cantidadUnos;

}

console.log(contarUnos(numero));