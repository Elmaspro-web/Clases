
import {multiplicarNumeros} from './funcionMultiplicarNumeros.js'

const formulario = document.getElementById("formularioMultiplicaciones");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event){

    event.preventDefault();

    const numUno = document.getElementById("numeroUno").value;
    const numDos = document.getElementById("numeroDos").value;

    resultado.textContent = multiplicarNumeros(numUno, numDos);

})