

export function buscarPrefijo(arr1, arr2, arr3)
{
    let prefijo = "";

    const minLongitud = Math.min(arr1.length, arr2.length, arr3.length);

    for (let i = 0; i < minLongitud; i++) {

        if (arr1[i] === arr2[i] && arr2[i] === arr3[i]) {
            prefijo = prefijo + arr1[i];
        } else {
            break;
        }
    }

    return prefijo;
}