import { Facade } from "./ui/facade.js";

const facade = new Facade();
facade.renderTask();

const taskForm = document.getElementById("idFormularioTarea");

taskForm.addEventListener("submit", e => {
    e.preventDefault();

    const titulo = document.getElementById("idTitle").value;
    const descripcion = document.getElementById("idDescription").value;
    const prioridad = document.getElementById("idPriority").value;

    facade.createTask(titulo, descripcion, prioridad);

    taskForm.reset();
});