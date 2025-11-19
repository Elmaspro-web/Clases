export function _addLocalStorage(usuarioNuevo)
{
    return localStorage.setItem("usuarios", JSON.stringify(usuarioNuevo));
}
export function _getLoginLocalStorage()
{
    return JSON.parse(localStorage.getItem("usuarios"))
}