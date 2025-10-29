import {estanCerrados} from './funcionEstanCerrados.js'

const formulario = document.getElementById('formularioParentesis');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function (event)
{
    event.preventDefault();

    const array = document.getElementById('stringParentesis').value;

    resultado.textContent = estanCerrados(array);

})