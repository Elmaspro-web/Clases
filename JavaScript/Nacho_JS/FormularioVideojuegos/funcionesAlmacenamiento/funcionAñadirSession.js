
function aniadirSessionStorage(array)
{
    const juegosGuardados = JSON.parse(sessionStorage.getItem("Videojuego")) || [];
    juegosGuardados.push(array);
    sessionStorage.setItem("Videojuego", JSON.stringify(juegosGuardados));
}

export {aniadirSessionStorage};