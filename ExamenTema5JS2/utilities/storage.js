export function _addLocalStorage(usuarioNuevo)
{
    return localStorage.setItem("usuario", JSON.stringify(usuarioNuevo));
}
export function _getLoginLocalStorage()
{
    return JSON.parse(localStorage.getItem("usuario"))
}