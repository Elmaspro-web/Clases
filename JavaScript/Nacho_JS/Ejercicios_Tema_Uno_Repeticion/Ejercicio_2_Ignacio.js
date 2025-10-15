// Los cajeros automáticos permiten códigos PIN de 4 o 6 dígitos y los
// códigos PIN no pueden contener más que exactamente 4 dígitos o
// exactamente 6 dígitos. Si a la función se le pasa una cadena de PIN
// válida, devuelve true, de lo contrario devuelve false.

// Inicializamos la variable de codigo
let codigo = 1523121;

// Creamos la funcion que devuelva si es valido el codigo
function esValido(codigo)
{
    // Pasamos el numero a string para que funcione el metodo .length
    let cString = codigo.toString();

    // Primero vemos que si es 4 o 6 de longitud
    if (cString.length === 6 || cString.length === 4)
    {
        return true;
    }

    // Devolvemos error si no tiene 4 o 6 digitos
    return "Error, debe tener 4 o 6 de longitud tu PIN";

}


// Mostramos por pantalla si es valido o no el PIN antes escrito
console.log(esValido(codigo));