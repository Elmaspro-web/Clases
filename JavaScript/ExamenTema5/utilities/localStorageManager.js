export function _addLocalStorage(variable, item)
{
    return localStorage.setItem(variable, JSON.stringify(item));
}

export function _loadLocalStorage(variable)
{
    return JSON.parse(localStorage.getItem(variable));
}