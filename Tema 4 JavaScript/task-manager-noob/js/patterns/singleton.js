import {Task} from "../models/task.js";

class Singleton
{
    constructor()
    {
        // Si ya existe una instancia, devuelve esa misma instancia (Singleton)
        if (Singleton.instance) return Singleton.instance;

        // Guarda la referencia de esta instancia para futuros usos
        Singleton.instance = this

        // Inicializa el array de tareas cargando lo que haya en localStorage
        this.tasks = this._loadLocalStorage();
    }

    addTask(title, description, priority, done)
    {
        const tarea = new Task(title, description, priority, done);
        this.tasks.push(tarea);
        this._addLocalStorage();
    }

    _addLocalStorage()
    {
        return localStorage.setItem("Tasks", JSON.stringify(this.tasks));
    }

    _loadLocalStorage()
    {
        return JSON.parse(localStorage.getItem("Tasks") || "[]");
    }

    toggleTaskStatus(index)
    {
        // Obtiene la tarea correspondiente al índice
        const tarea = this.tasks[index];

        // Invierte el valor de done (true <-> false)
        tarea.done = !tarea.done;
        this._addLocalStorage();
    }

    // Elimina una tarea del array por índice y actualiza localStorage
    removeTask(index)
    {
        this.tasks.splice(index, 1);
        return this._addLocalStorage();
    }

    filterTaskByStatus(done)
    {
        // Devuelve solo las tareas donde tarea.done coincide con done
        return this.tasks.filter(tarea => tarea.done === done);
    }

    filterTaskByPriority(priority)
    {
        // Devuelve solo las tareas donde tarea.priority coincide con el valor dado
        return this.tasks.filter(tarea => tarea.priority === priority);
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