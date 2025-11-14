import {TareasSingleton} from "../patterns/GestorTareas.js";
import {_addLocalStorage} from "../utilities/localStorageManager.js";

export class DomFacade {

    constructor() {
        this.singleton = new TareasSingleton();
    }

    mostrarTarea(guardarTarea) {
        const contenedor = document.getElementById("verTareas");
        contenedor.innerHTML = "";
        for (let i = 0; i < guardarTarea.length; i++) {

            const tareaUnica = guardarTarea[i];

            const contenedorTarea = document.createElement("section");

            const completarBoton = document.createElement("button");
            completarBoton.textContent = tareaUnica.estado ? "No completado" : "Completado";

            const eliminarBoton = document.createElement("button");
            eliminarBoton.textContent = "Eliminar";

            const editarBoton = document.createElement("button");
            editarBoton.textContent = "Editar";

            completarBoton.addEventListener("click", () => {
                this.singleton.completarTarea(i);
                this.mostrarTarea(this.singleton.getTareas());
            });

            eliminarBoton.addEventListener("click", () => {
                this.singleton.eliminarTarea(i);
                this.mostrarTarea(this.singleton.getTareas());
            });

            editarBoton.addEventListener("click", () => {
                const nuevoTitulo = prompt("Título", tareaUnica.titulo);
                if (nuevoTitulo !== null) tareaUnica.titulo = nuevoTitulo;

                const nuevaDescripcion = prompt("Descripción", tareaUnica.descripcion);
                if (nuevaDescripcion !== null) tareaUnica.descripcion = nuevaDescripcion;

                const nuevaPrioridad = prompt("Prioridad (Baja, Normal, Alta)", tareaUnica.prioridad);
                if (nuevaPrioridad === "Baja" || nuevaPrioridad === "Normal" || nuevaPrioridad === "Alta") tareaUnica.prioridad = nuevaPrioridad;

                _addLocalStorage(this.singleton.getTareas());
                this.mostrarTarea(this.singleton.getTareas());
            });

            if (tareaUnica.estado === true) {
                contenedorTarea.style.backgroundColor = 'green';
            } else if (tareaUnica.prioridad === "Baja") {
                contenedorTarea.style.backgroundColor = 'lightyellow';
            } else if (tareaUnica.prioridad === "Normal") {
                contenedorTarea.style.backgroundColor = 'lightgreen';
            } else if (tareaUnica.prioridad === "Alta") {
                contenedorTarea.style.backgroundColor = 'lightcoral';
            }

            contenedorTarea.innerHTML =
                `<p>ID: ${tareaUnica.id}</p>
                <p>Titulo: ${tareaUnica.titulo}</p>
                <p>Descripcion: ${tareaUnica.descripcion}</p>
                <p>Prioridad: ${tareaUnica.prioridad}</p>
                <p>Estado: ${tareaUnica.estado ? "Completado" : "No completado"}</p>
                <p>Fecha: ${tareaUnica.fecha}</p>`

            contenedorTarea.appendChild(completarBoton);
            contenedorTarea.appendChild(eliminarBoton);
            contenedorTarea.appendChild(editarBoton);
            contenedor.appendChild(contenedorTarea);
        }
    }
}