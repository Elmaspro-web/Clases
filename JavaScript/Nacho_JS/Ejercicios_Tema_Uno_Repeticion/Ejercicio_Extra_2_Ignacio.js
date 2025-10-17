// Descripción:
// Dada una cadena s, encuentra la longitud de la subcadena más larga que
// no tenga caracteres repetidos.
// Objetivo:
// Devolver la longitud máxima de una subcadena con todos los caracteres
// únicos.

// Inicializamos la cadena s
const s = "Hola soy nacho";

// Creamos la función
function subcadenaLarga(s)
{

    // Inicializamos una variable que elimina automáticamente valores repetidos
    let set = new Set();
    let resultado = "";

    // Hacemos el for que vaya añadiendo al set las letras (elimina los duplicados automáticamente lo repetido)
    for (let i = 0; i < s.length; i++)
    {
        set.add(s[i]);
    }

    // Transformamos el set en un array
    set = [...set];
    // En el resultado cogemos el array y le quitamos las comas para hacer un string
    resultado = set.join("");
    // Devolvemos el string
    return resultado;
}
// Mostramos por pantalla el string final
console.log(subcadenaLarga(s));