export function _addLocalStorage(tarea)
{
    return localStorage.setItem("Tareas", JSON.stringify(tarea));
}

export function _loadLocalStorage()
{
    return JSON.parse(localStorage.getItem("Tareas"));
}