"use strict";

import { Tarea } from './models/Tareas.js';

const boton = document.getElementById("boton");
let tareaGuardar = getTareaLocalStorage() || [];

// Evento para agregar tarea
boton.addEventListener("click", function (e) {
    e.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;
    const fechaLimite = document.getElementById("fechaLimite").value; // <-- corregido
    const estado = document.getElementById("estado").value;

    let tarea = new Tarea(titulo, descripcion, fechaLimite, estado);
    tareaGuardar.push(tarea);
    addTareaLocalStorage(tareaGuardar);
    mostrarTareas(tareaGuardar);
});

// Función para mostrar tareas
function mostrarTareas(guardarTarea) {
    const contenedorTareas = document.getElementById("contenedorTareas");
    contenedorTareas.innerHTML = "";

    for (let i = 0; i < guardarTarea.length; i++) {
        const tarea = guardarTarea[i];

        const elemento = document.createElement("div");
        elemento.innerHTML = `
            <p><strong>${tarea.titulo}</strong></p>
            <p>${tarea.descripcion}</p>
            <p>Fecha límite: ${tarea.fechaLimite}</p>
            <p>Estado: ${tarea.estado}</p>
        `;

        // Botón para completar
        const botonCompletado = document.createElement("button");
        botonCompletado.textContent = "Completar tarea";
        elemento.appendChild(botonCompletado);

        botonCompletado.addEventListener("click", () => {
            completeTask(i, guardarTarea);
        });

        // Color según estado
        elemento.style.background = tarea.estado === "completado" ? "green" : "red";

        contenedorTareas.appendChild(elemento);
    }
}

// Marcar tarea como completada
function completeTask(i, guardarTarea) {
    guardarTarea[i].estado = "completado";
    addTareaLocalStorage(guardarTarea);
    mostrarTareas(guardarTarea); // <-- refresca vista
}

// Guardar en localStorage
function addTareaLocalStorage(guardarTarea) {
    localStorage.setItem("tareas", JSON.stringify(guardarTarea));
}

// Obtener desde localStorage
function getTareaLocalStorage() {
    return JSON.parse(localStorage.getItem("tareas"));
}

// Mostrar tareas al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarTareas(tareaGuardar);
});
