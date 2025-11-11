import {gestorTareas} from "./GestorTareas.js";

class TareaFacade
{
    constructor() {
        this._loadLocalStorage();
    }

    _loadLocalStorage() {
        gestorTareas.tareas = JSON.parse(localStorage.getItem("Tarea")) || [];
    }

    _addLocalStorage() {
        localStorage.setItem("Tarea", JSON.stringify(gestorTareas.getTareas()));
    }

    crearTarea(titulo, descripcion, prioridad, estado = "No Completado") {
        gestorTareas.agregarTarea(titulo, descripcion, prioridad, estado);
        this._addLocalStorage();
    }

    completarTarea(indice) {
        const tarea = gestorTareas.getTareas()[indice];
        tarea.estado = tarea.estado === "Completada" ? "No completada" : "Completada";
        this._addLocalStorage();

    }

    eliminarTarea(i) {
        gestorTareas.eliminarTarea(i);
        this._addLocalStorage();
    }


    mostrarTareas() {
        const tarea = gestorTareas.getTareas()
        let mTarea = this;
        const seccionTareas = document.getElementById("idSectionTareas");
        seccionTareas.innerHTML = "";
        let contador = 0;
        for (let i = 0; i < tarea.length; i++) {
            const tareaCampo = tarea[i];
            contador++;
            const contenedor = document.createElement("div");
            contenedor.classList.add("contenedorTarea");

            if (tareaCampo.estado === "Completada") {
                contenedor.style.backgroundColor = "green";
                contenedor.style.color = "white";
            } else if (tareaCampo.prioridad === "Low") {
                contenedor.style.backgroundColor = "lightyellow";
            } else if (tareaCampo.prioridad === "Normal") {
                contenedor.style.backgroundColor = "lightgreen";
            } else if (tareaCampo.prioridad === "High") {
                contenedor.style.backgroundColor = "lightcoral";
            }

            contenedor.innerHTML = `
            <p><strong>${contador}. Titulo: ${tareaCampo.titulo}</strong></p>
            <p>Descripcion: ${tareaCampo.descripcion}</p>
            <p>Prioridad: ${tareaCampo.prioridad}</p>
            <p>Estado: ${tareaCampo.estado}</p>
            <p>Fecha: ${tareaCampo.fechaCreacion}</p>
        `;

            const botonCompletar = document.createElement("button");
            botonCompletar.textContent = "Completar";
            botonCompletar.classList.add("botonCompletar");

            botonCompletar.addEventListener("click", function () {
                mTarea.completarTarea(i);
                mTarea.mostrarTareas();
            });

            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.classList.add("botonEliminar");

            botonEliminar.addEventListener("click", function () {
                mTarea.eliminarTarea(i);
                mTarea.mostrarTareas();
            });

            contenedor.appendChild(botonCompletar);
            contenedor.appendChild(botonEliminar);
            seccionTareas.appendChild(contenedor);
        }
    }
}

const tareaFacade = new TareaFacade();
export { tareaFacade };