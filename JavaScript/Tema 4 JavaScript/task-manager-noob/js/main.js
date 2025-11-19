import { Facade } from "./ui/facade.js";
import { Singleton } from "./patterns/singleton.js";
import { FilterStrategy, FilterByPriority, FilterByStatus } from "./patterns/strategy.js"
import {Task} from "../../gestor-de-tareas-pro99/js/models/tarea.js";
import {_addLocalStorage, _loadLocalStorage} from "../../gestor-de-tareas-pro99/js/utilities/localStorageManager.js";

const facade = new Facade();
const singleton = new Singleton();
const strategy = new FilterStrategy();



const taskForm = document.getElementById("idFormularioTarea");
let lista_tareas = _loadLocalStorage() || [];
taskForm.addEventListener("submit", e => {

    const titulo = document.getElementById("idTitle").value;
    const descripcion = document.getElementById("idDescription").value;
    const prioridad = document.getElementById("idPriority").value;

    const tarea = new Task(titulo, descripcion, prioridad, false);
    lista_tareas.push(tarea);
    _addLocalStorage(lista_tareas);
});

document.addEventListener("DOMContentLoaded", e => {
    facade.renderTask(_loadLocalStorage());
})

const botonPrioridad = document.getElementById("priorityTaskButtonFilter");
const botonCompletar = document.getElementById("completeTaskButtonFilter");

botonPrioridad.addEventListener("click", () => {
    strategy.setStrategy(new FilterByPriority());
    strategy.filter(singleton.tasks, "low");
});

botonCompletar.addEventListener("click", () => {
    strategy.setStrategy(new FilterByStatus());
    strategy.filter(singleton.tasks);
});