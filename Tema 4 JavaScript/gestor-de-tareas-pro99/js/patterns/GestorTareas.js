import {Tarea} from '../models/tarea.js';
import {_addLocalStorage, _loadLocalStorage} from "../utilities/localStorageManager.js";

export class TareasSingleton {
    constructor() {
        if (TareasSingleton.instance) return TareasSingleton.instance;
        this.listaTareas = _loadLocalStorage() || [];
        TareasSingleton.instance = this;
    }

    aniadirTarea(titulo, descripcion, prioridad) {
        return new Tarea(titulo, descripcion, prioridad);
    }

    eliminarTarea(index) {
        this.listaTareas.splice(index, 1);
        _addLocalStorage(this.listaTareas)
    }

    completarTarea(index) {
        if (this.listaTareas[index]) {
            this.listaTareas[index].estado = !this.listaTareas[index].estado;
            _addLocalStorage(this.listaTareas);
        }
    }

    getTareas() {
        return this.listaTareas;
    }

}