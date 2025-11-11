import {gestorTareas} from "./GestorTareas.js";

class TareaFacade
{
    constructor() {
        const tareasGuardadas = localStorage.getItem("Tarea");
        gestorTareas.tareas = tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
    }
    crearTarea(titulo, descripcion, prioridad) {
        const tarea = gestorTareas.agregarTarea(titulo, descripcion, prioridad);
        this._guardar();
        return tarea;
    }

    completarTarea(indice) {
        const tarea = gestorTareas.tareas[indice];
        if (tarea) {
            tarea.estado = tarea.estado === "Completada" ? "No completada" : "Completada";
            this._guardar();
        }
    }

    eliminarTarea(indice) {
        gestorTareas.eliminarTarea(indice);
        this._guardar();
    }

    getTareas() {
        return gestorTareas.getTareas();
    }
    _guardar() {
        const tarea = gestorTareas.getTareas() || [];
        localStorage.setItem("Tarea", JSON.stringify(tarea));
    }
}

const tareaFacade = new TareaFacade();
export { tareaFacade };