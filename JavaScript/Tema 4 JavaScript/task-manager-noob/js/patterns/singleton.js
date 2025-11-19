import {Facade} from "../ui/facade.js";
import {_loadLocalStorage} from "../../../gestor-de-tareas-pro99/js/utilities/localStorageManager.js";



class Singleton
{
    constructor()
    {
        // Si ya existe una instancia, devuelve esa misma instancia (Singleton)
        if (Singleton.instance) return Singleton.instance;

        // Guarda la referencia de esta instancia para futuros usos
        Singleton.instance = this
        // Inicializa el array de tareas cargando lo que haya en localStorage
        this.tasks = _loadLocalStorage();
    }

    toggleTaskStatus(id)
    {
        const index = this.tasks.findIndex(tarea => tarea.id === id);
        // Obtiene la tarea correspondiente al índice
        const tarea = this.tasks[index];

        // Invierte el valor de done (true <-> false)
        tarea.done = !tarea.done;
        _loadLocalStorage();
    }
}

export {Singleton};


// Opcional: Ordena el array de tareas por estado (completadas primero o pendientes primero)
/*  sortByStatus(asc = true) {
    // asc = true → completadas primero
    // asc = false → pendientes primero
    this.tasks.sort((a, b) => (a.done === b.done) ? 0 : a.done ? (asc ? -1 : 1) : (asc ? 1 : -1));

    // Guarda cambios en localStorage
    this._addLocalStorage();
}
*/