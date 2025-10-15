

function calcularFactorial(numero)
{
    let result = 1;
    for (let i = 1; i <= numero; i++)
    {
        result *= i;
    }
    return result;
}

const button =document.getElementById("submitButton");
button.value = "Thinking";
button.addEventListener("click", function (e) {
    const inputNumPositivo = document.getElementById("numPositivo")
    const resultado = calcularFactorial(inputNumPositivo.valueAsNumber)
    alert(`El factorial de ${inputNumPositivo} es ${resultado}`)
});