"use strict";

import {Tarea} from './models/Tareas.js';
import {addTareaLocalStorage, getTareaLocalStorage, mostrarTareas} from "./tools/utilities.js";

const boton = document.getElementById("boton");
let tareaGuardar = getTareaLocalStorage() || [];

boton.addEventListener("click", function (e) {
    e.preventDefault();
    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;
    const fechaLimite = document.getElementById("fechaLimite").valueAsDate;
    const estado = document.getElementById("estado").value;

    let tarea = new Tarea(titulo, descripcion, fechaLimite, estado);
    tareaGuardar.push(tarea);
    addTareaLocalStorage(tareaGuardar);
    mostrarTareas(getTareaLocalStorage());
})