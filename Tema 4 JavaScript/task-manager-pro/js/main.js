"use strict"

import {tareaFacade} from './patterns/TareaFacade.js';

const formularioEnviar = document.getElementById("idFormularioTarea");
mostrarTareas(tareaFacade.getTareas());
formularioEnviar.addEventListener("submit", function (event) {

    event.preventDefault();

    const tituloTarea = document.getElementById("idTitulo").value;
    const descripcionTarea = document.getElementById("idDescripcion").value;
    const prioridadTarea = document.getElementById("idSelect").value;

    tareaFacade.crearTarea(tituloTarea, descripcionTarea, prioridadTarea);
    mostrarTareas(tareaFacade.getTareas());

});

function mostrarTareas(tareas)
{
    const seccionTareas = document.getElementById("idSectionTareas");
    seccionTareas.innerHTML = "";
    let contador = 0;
    for (let i = 0; i < tareas.length; i++) {
        const tarea = tareas[i];
        contador++;
        const contenedor = document.createElement("div");
        contenedor.classList.add("contenedorTarea");

        if (tarea.estado === "Completada") {
            contenedor.style.backgroundColor = "green";
            contenedor.style.color = "white";
        } else if (tarea.prioridad === "Low") {
            contenedor.style.backgroundColor = "lightyellow";
        } else if (tarea.prioridad === "Normal") {
            contenedor.style.backgroundColor = "lightgreen";
        } else if (tarea.prioridad === "High") {
            contenedor.style.backgroundColor = "lightcoral";
        }

        contenedor.innerHTML = `
            <p><strong>${contador}. Titulo: ${tarea.titulo}</strong></p>
            <p>Descripcion: ${tarea.descripcion}</p>
            <p>Prioridad: ${tarea.prioridad}</p>
            <p>Estado: ${tarea.estado}</p>
            <p>Fecha: ${tarea.fechaCreacion}</p>
        `;

        const botonCompletar = document.createElement("button");
        botonCompletar.textContent = "Completar";
        botonCompletar.classList.add("botonCompletar");

        botonCompletar.addEventListener("click", function () {
            tareaFacade.completarTarea(i);
            mostrarTareas(tareaFacade.getTareas());
        });

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("botonEliminar");

        botonEliminar.addEventListener("click", function () {
            tareaFacade.eliminarTarea(i);
            mostrarTareas(tareaFacade.getTareas());

        });

        contenedor.appendChild(botonCompletar);
        contenedor.appendChild(botonEliminar);
        seccionTareas.appendChild(contenedor);
    }
}