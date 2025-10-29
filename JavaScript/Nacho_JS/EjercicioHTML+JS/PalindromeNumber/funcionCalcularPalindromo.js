
export function funcionCalcularPalindromo(numero)
{

        let numeroInvertido = 0;
        let numeroReal = numero;
        while (numero > 0)
        {
            let digito = numero % 10;
            numeroInvertido = numeroInvertido * 10 + digito;
            numero = Math.floor(numero/10);
        }
        if (numeroReal === numeroInvertido)
        {
            return true;
        }
        return false;
}