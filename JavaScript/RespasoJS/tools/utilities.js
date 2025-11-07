'use strict'

export function addTareaLocalStorage(guardarTarea)
{
    localStorage.setItem("tareas", JSON.stringify(guardarTarea));
}

export function getTareaLocalStorage()
{
    return JSON.parse(localStorage.getItem("tareas"));
}

export function mostrarTareas(guardarTarea)
{
    const contenedorTareas = document.getElementById("contenedorTareas");
    for (let i = 0; i < guardarTarea.length; i++)
    {
        const elemento = document.createElement("div");
        elemento.innerHTML = `
        <p>${guardarTarea.titulo}</p>
        <p>${guardarTarea.descripcion}</p>
        <p>${guardarTarea.fechaLimite}</p>
        <p>${guardarTarea.estado}</p>
        `;

        const botonCompletado = document.createElement("button");
        botonCompletado.textContent = "Completar tarea";
        elemento.appendChild(botonCompletado);

        botonCompletado.addEventListener("click",  (e) => {
            completeTask(i, guardarTarea);
        });

        if (guardarTarea[i].estado === "completado")
        {
            elemento.style.background = "green";
        }
        else
        {
            elemento.style.background = "red";
        }
        contenedorTareas.appendChild(elemento);
    }
}

function completeTask(i, guardarTarea)
{
    guardarTarea[i].estado = 'completado';
    addTareaLocalStorage(guardarTarea);

}