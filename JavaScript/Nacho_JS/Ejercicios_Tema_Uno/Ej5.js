
// Implementar la función que toma como argumento una secuencia de
// enteros o string y devuelve una lista de elementos sin ningún
// elemento repetido y preservando el orden original de los elementos.

let lista = [1,3,5,4,3,3,1];

// Lo descubri por internet y me gusto

let trySet = new Set(lista);
lista = [...trySet];
console.log(lista);


// Metodo propio
function secuencia(lista)
{
    lista.map(function(numero){
        let count = 0;
        for (let i = 0; i <= lista.length; i++)
        {

            if (numero === lista[i]) {
                count++;

            }
            if (count >= 2)
            {
                lista.splice(i, 1);
                count = 0;
            }
        }
    });

    return lista;

}

console.log(secuencia(lista));