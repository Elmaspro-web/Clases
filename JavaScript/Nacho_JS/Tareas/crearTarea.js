import {Tarea} from "./tareaModel.js";


const form = document.getElementById("formularioCrearTarea");
let contador = parseInt(localStorage.getItem("contadorTareas")) || 0;
let guardarStorage = JSON.parse(localStorage.getItem("Tareas")) || [];
form.addEventListener("submit", function (event){

    event.preventDefault();

    const tituloTarea = document.getElementById("tituloTarea").value;

    const descripcionTarea = document.getElementById("descripcionTarea").value;

    const prioridadTarea = document.getElementById("prioridadTarea");
    const valorSeleccionado = prioridadTarea.value;
    const textoSeleccionado = prioridadTarea.options[prioridadTarea.selectedIndex].text;

    const fecha = new Date();
    const fechaLimiteTarea = document.getElementById("fechaLimite").value = fecha.toISOString().slice(0, 10);

    const tarea = new Tarea(tituloTarea, descripcionTarea, textoSeleccionado, fechaLimiteTarea);

    contador++;
    guardarStorage.push(tarea);

    localStorage.setItem("Tareas", JSON.stringify(guardarStorage));
    localStorage.setItem("contadorTareas", JSON.stringify(contador));

    alert(JSON.stringify(tarea));

});
