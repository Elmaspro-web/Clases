const numeroPrimo = 6;
let esPrimo = true;

function esPrimoDos(numeroPrimo)
{
    for (let i = 2; i <= numeroPrimo; i++)
    {
        if (numeroPrimo % i === 0)
        {
            return false;
        }
        else
        {
            return esPrimo;
        }
    }
};
console.log(esPrimoDos(numeroPrimo));