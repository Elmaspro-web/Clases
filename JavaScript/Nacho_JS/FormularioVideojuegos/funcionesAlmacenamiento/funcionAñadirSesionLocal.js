
function aniadirLocal(array)
{
    const juegosGuardados = JSON.parse(localStorage.getItem("Videojuego")) || [];
    juegosGuardados.push(array)
    return localStorage.setItem("Videojuego", JSON.stringify(juegosGuardados));
}

export {aniadirLocal};