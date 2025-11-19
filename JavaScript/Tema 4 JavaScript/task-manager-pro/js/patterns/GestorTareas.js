import {Tarea} from '../models/Tarea.js';
class GestorTareas
{
    constructor() {
        if (GestorTareas.instance) return GestorTareas.instance;
        this.tareas = [];
        GestorTareas.instance = this;
    }
    agregarTarea(titulo, descripcion, prioridad, estado = "No completado") {
        const tarea = new Tarea(titulo, descripcion, prioridad, estado);
        this.tareas.push(tarea);
        return tarea;
    }

    eliminarTarea(indice) {
        this.tareas.splice(indice, 1);
    }

    getTareas() {
        return this.tareas;
    }
}

const gestorTareas = new GestorTareas();
export { gestorTareas };