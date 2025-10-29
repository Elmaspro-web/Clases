

export function funcionRomanoANumero(romano)
{
    const valores = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let numero = 0;
    for (let i = 0; i < romano.length; i++)
    {
        let valorActual = valores[romano[i]];
        let valorSiguiente = valores[romano[i+1]];

        if (valorActual < valorSiguiente)
        {
            numero = numero - valorActual;
        }
        else
        {
            numero = numero + valorActual
        }
    }

    return numero;
}