"use strict"

function calcularFactorial()
{
    let numeroPantalla = prompt("Inserta tu numero para calcular su factorial");

    let numero = parseInt(numeroPantalla, 10);

    if (numero < 0)
    {
        mostrarError("Debe ser un numero positivo");
        return;
    }

    if (isNaN(numero))
    {
        mostrarError("Debe ser un numero");
        return;
    }

    if (numero !== parseFloat(numeroPantalla))
    {
        mostrarError("Debe ser un numero entero");
        return;
    }

    let factorial = 1;
    for (let i = numero; i > 0; i--)
    {
            factorial *= i;
    }

    let contenedor = document.getElementById("resultado");
    let parrafo = document.createElement("p")
    parrafo.textContent = `El factorial de ${numero} es: ${factorial}`;

    contenedor.appendChild(parrafo);

}

function mostrarError(mensaje)
{
    let contenedor = document.getElementById("resultado");
    let parrafo = document.createElement("p");
    parrafo.textContent = mensaje;
    contenedor.appendChild(parrafo);
}

window.onload = calcularFactorial;