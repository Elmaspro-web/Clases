
// Implementa una función de diferencia, que devuelva un array que
// tenga todos los valores de la lista pasada como primer parámetro
// que no están presentes en la lista b manteniendo su orden. Si un
// valor está presente en b, todas sus apariciones deben ser eliminadas
// de la otra

let arrayUno = [1,2,3,4];
let arrayDos = [1,3,4,7];

function diff(arrayUno, arrayDos)
{
    let arrayReal = [];

    for (let i = 0; i < arrayUno.length; i++) {

        if (!arrayDos.includes(arrayUno[i]) && !arrayReal.includes(arrayUno[i]))
        {
            arrayReal.push(arrayUno[i]);
        }

    }

    for (let i = 0; i < arrayDos.length; i++)
    {

        if (!arrayUno.includes(arrayDos[i]) && !arrayReal.includes(arrayDos[i]))
        {
            arrayReal.push(arrayDos[i]);
        }

    }

    return arrayReal;

}

console.log(diff(arrayUno, arrayDos));