import {buscarPrefijo} from "./funcionBuscarPrefijo.js";


const formulario = document.getElementById('formArrays');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function (event)
{
    event.preventDefault();

    const arrayUno = document.getElementById('stringUno').value.toLowerCase();
    const arrayDos = document.getElementById('stringDos').value.toLowerCase();
    const arrayTres = document.getElementById('stringTres').value.toLowerCase();

    resultado.textContent = buscarPrefijo(arrayUno, arrayDos, arrayTres);

})