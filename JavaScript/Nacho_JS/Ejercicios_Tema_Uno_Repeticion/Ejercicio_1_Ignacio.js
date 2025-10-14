// Haz una función que calcule y devuelva el número de vocales en la
// cadena dada. Consideraremos a, e, i, o, u como vocales. La cadena de
// entrada sólo consta de letras minúsculas y/o espacios.

// Cadena que le damos
const cadena = "Hola";

// Creamos la función que devuelva las vocales
function nVocales(cadena)
{
    // Creamos el contador y un for que recorra todas las letras
    let cont = 0;
    for (let i = 0; i < cadena.length; i++)
    {
        // Le indicamos los valor que si tienen ejecuta en este las vocales y aumentaria el contador
        if (cadena[i] === 'a' || cadena[i] === 'e' || cadena[i] === 'i' || cadena[i] === 'o' || cadena[i] === 'u')
        {
            cont++;
        }
    }
    // Devolvemos el contador
    return cont;
}

// Mostramos por la consola el numero de vocales
console.log(nVocales(cadena));