
function mostrarLocalStorage(array)
{
    return JSON.parse(localStorage.getItem('Videojuego'));
}

export {mostrarLocalStorage};