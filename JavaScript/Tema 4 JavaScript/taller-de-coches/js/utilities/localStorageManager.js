export function _addLocalStorage(tarea)
{
    return localStorage.setItem("Vehiculos", JSON.stringify(tarea));
}

export function _loadLocalStorage()
{
    return JSON.parse(localStorage.getItem("Vehiculos"));
}