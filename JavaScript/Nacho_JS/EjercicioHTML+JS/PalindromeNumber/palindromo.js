import {funcionCalcularPalindromo} from "./funcionCalcularPalindromo.js";

const form = document.getElementById('palindromoForm')
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function (event)
{
    event.preventDefault();

    const numero = parseInt(document.getElementById('numeroPalindromo').value);
    const esPalindromo = funcionCalcularPalindromo(numero);

    if (esPalindromo)
    {
        resultado.textContent = "Es un numero de Palindromo";
    }
    else
    {
        resultado.textContent = "No es un numero de palindromo";
    }
});