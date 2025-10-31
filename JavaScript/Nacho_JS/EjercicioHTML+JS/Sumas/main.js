
import {sumarNumeros} from './funcionSumarNumeros.js'

const formulario = document.getElementById("formularioSumas");
formulario.addEventListener("submit", function (event)
{
    event.preventDefault();

    const numeroUno = parseInt(document.getElementById("numUno").value);
    const numeroDos = parseInt(document.getElementById("numDos").value);

    const parrafo = document.createElement("p");
    parrafo.textContent = sumarNumeros(numeroUno, numeroDos);
    document.body.appendChild(parrafo);
})