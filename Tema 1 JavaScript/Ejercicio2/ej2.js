"use strict";

function calculoTemperaturas()
{

    let pantalla = prompt("Dame numeros separados por comas, si los numeros son con decimales se separan por '.' ")
    let valores = pantalla.split(",").map(v => v.trim());

    let temperaturas = [];

    for (let valor of valores)
    {

        let temp = parseFloat(valor);

        if (isNaN(temp))
        {
            mensajeError(`${valor} no es un numero`);
            return;
        }

        temperaturas.push(temp);

    }

    if (temperaturas.length === 0) {
        mensajeError("No se introdujeron temperaturas");
        return;
    }

    let mayor = -Infinity;
    let menor = Infinity;

    temperaturas.forEach(temp => {

        if (mayor < temp)
        {
            mayor = temp;
        }

        if (menor > temp)
        {
            menor = temp;
        }

    });

    // OTRA FORMA DE HACER LA SUMA CON .reduce(...) => reducir a 1 solo número
    //
    // let suma = temperaturas.reduce((acc, t) => acc + t, 0);
    // acc => como suma +=; (es el acumulador)
    // t => es el valor de la temperatura;
    // acc + t; (la operación que realiza)
    // 0 => valor inicial

    let tempMedia = calcularTemperaturaMedia(temperaturas);
    let numerosMayoresMedia = cantidadMayoresMedia(tempMedia, temperaturas);
    let arrayTemperaturasMenorMayor = ordenarTemperaturasMenorMayor(temperaturas);

    crearParrafo(`La temperatura media es: ${tempMedia}`);
    crearParrafo(`La temperatura máxima es: ${mayor}`);
    crearParrafo(`La temperatura mínima es: ${menor}`);
    crearParrafo(`¿Cuántas temperaturas superan la media (${tempMedia})? ${numerosMayoresMedia}`);
    crearParrafo(`Las temperaturas ordenadas de menor a mayor: ${arrayTemperaturasMenorMayor}`)

}

function crearParrafo(texto)
{
    let contenedor = document.getElementById("resultado");
    let parrafo = document.createElement("p");
    parrafo.textContent = texto;
    contenedor.appendChild(parrafo);
}

function calcularTemperaturaMedia(temperaturasArray)
{
    let suma = 0;
    for (let i = 0; i < temperaturasArray.length; i++)
    {
        suma += temperaturasArray[i];
    }
    return suma / temperaturasArray.length;
}

function cantidadMayoresMedia(tempMedia, temperaturasArray)
{
    let contador = 0;

    for (let i = 0; i < temperaturasArray.length; i++)
    {
        if (temperaturasArray[i] > tempMedia)
        {
            contador++;
        }
    }

    return contador;
}

function ordenarTemperaturasMenorMayor(temperaturasArray)
{

    return temperaturasArray.sort((a, b) => a - b);

}

function mensajeError(mensaje)
{
    let contenedor = document.getElementById("resultado");
    let parrafo = document.createElement("p");
    parrafo.textContent = mensaje;
    contenedor.appendChild(parrafo);
}

window.onload = calculoTemperaturas;