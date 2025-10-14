
let nInit = 3;
let nN = 0;
function lagrange(nInit)
{
    let arrayRes = [];

    for (let i = 0; i < 4; i++)
    {
        let cuadrado = Math.floor(Math.sqrt(nInit));
        nInit = nInit - (cuadrado * cuadrado);
        arrayRes.push(cuadrado);
        nN++;
        if (nInit === 0) break;
    }

    while (nN !== 4)
    {
        nN++;
        arrayRes.push(0);
    }
    return arrayRes;
}

console.log(lagrange(nInit));