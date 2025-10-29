import {funcionRomanoANumero} from "./funcionRomanoANumero.js";

const resultado = document.getElementById('resultado');
const formulario = document.getElementById('formNumero');

formulario.addEventListener('submit', function (event){
    event.preventDefault();

    const numeroRomano = document.getElementById('numeroRomano').value.toUpperCase();

    resultado.textContent = funcionRomanoANumero(numeroRomano);

});