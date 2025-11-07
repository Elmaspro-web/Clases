
function mostrarSessionStorage(array) {
    return JSON.parse(sessionStorage.getItem('Videojuego'));
}

export {mostrarSessionStorage};