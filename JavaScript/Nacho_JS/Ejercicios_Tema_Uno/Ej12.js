
const arrayRGB = "RRGBRGBB";

function desarrollo(arrayRGB)
{
    let arrayVacio = arrayRGB;


    while (arrayVacio.length > 1)
    {
        arrayRGB = arrayVacio;
        arrayVacio = "";
        for (let i = 0; i <= arrayRGB.length-1; i++)
        {

            let letraInit = arrayRGB[i];
            let letraSig = arrayRGB[i+1];
            if (letraInit === letraSig)
            {
                arrayVacio = arrayVacio + arrayRGB[i];
            }
            else if ((letraInit === 'R' && letraSig === 'B') || (letraInit === 'B' && letraSig === 'R'))
            {
                arrayVacio = arrayVacio + "G";
            }
            else if ((letraInit === 'R' && letraSig === 'G') || (letraInit === 'G' && letraSig === 'R'))
            {
                arrayVacio = arrayVacio + "B";
            }
            else if ((letraInit === 'B' && letraSig === 'G') || (letraInit === 'G' && letraSig === 'B'))
            {
                arrayVacio = arrayVacio + "R";
            }
        }
    }
    return arrayVacio;

}

console.log(desarrollo(arrayRGB));