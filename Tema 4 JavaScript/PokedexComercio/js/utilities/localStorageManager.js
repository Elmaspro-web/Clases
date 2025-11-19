export function _addLocalStorage(tarea)
{
    return localStorage.setItem("Pokemons", JSON.stringify(tarea));
}

export function _loadLocalStorage()
{
    return JSON.parse(localStorage.getItem("Pokemons"));
}