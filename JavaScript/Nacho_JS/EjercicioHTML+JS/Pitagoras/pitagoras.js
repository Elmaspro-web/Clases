
const form = document.getElementById('pitagorasForm');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function (event)
{
    event.preventDefault();

    const catetoA = parseFloat(document.getElementById('catetoA').value);
    const catetoB = parseFloat(document.getElementById('catetoB').value);

    if (isNaN(catetoA) || isNaN(catetoB))
    {
        resultado.textContent = "Ingrese los datos bien";
        return;
    }

    const hipotenusa = Math.sqrt(catetoA ** 2 + catetoB ** 2);

    resultado.textContent = `La hipotenusa es: ${hipotenusa.toFixed(2)}`;
});