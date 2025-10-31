
import {sumarNumeros} from './funcionSumarNumeros.js'

const formulario = document.getElementById("formularioSumas");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event)
{
    event.preventDefault();

    const numeroUno = parseInt(document.getElementById("numUno").value);
    const numeroDos = parseInt(document.getElementById("numDos").value);

    resultado.textContent = sumarNumeros(numeroUno, numeroDos);
})