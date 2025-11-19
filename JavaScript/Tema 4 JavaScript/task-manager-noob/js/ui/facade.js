import {Singleton} from "../patterns/singleton.js";
import {_addLocalStorage, _loadLocalStorage} from "../../../gestor-de-tareas-pro99/js/utilities/localStorageManager.js";

class Facade
{
    constructor()
    {
        this.singleton = new Singleton();
    }

    renderTask(tarea) {
        const container = document.getElementById("seeTask");
        container.innerHTML = "";
        for (let i = 0; i < tarea.length; i++) {
            const tareas = tarea[i];

            const text = document.createElement("div");

            if (tareas.done === true) {
                text.style.backgroundColor = "purple";
                text.style.color = "white";
            } else if (tareas.priority === "high") {
                text.style.backgroundColor = "lightcoral";
            } else if (tareas.priority === "low") {
                text.style.backgroundColor = "lightyellow";
            } else if (tareas.priority === "normal") {
                text.style.backgroundColor = "lightgreen";
            }

            text.classList.add("task-item");
            text.innerHTML = `
            <p>ID: ${tareas.id}</p>
            <p>Title: ${tareas.title}</p>
            <p>Description: ${tareas.description}</p>
            <p>Priority: ${tareas.priority}</p>
            <p>Status: ${tareas.done ? "Completada" : "No Completada"}</p>
            <p>Date: ${tareas.createAt}</p>
            `
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Eliminar";
            deleteButton.addEventListener("click", () => {
                tareas.splice(i, 1);
                _addLocalStorage(tareas);
                container.innerHTML = "";
            });

            const completeButton = document.createElement("button");
            completeButton.textContent = tareas.done ? "Descompletar" : "Completar";
            completeButton.addEventListener("click", () => {
                this.singleton.toggleTaskStatus(tareas.id);
            });

            text.appendChild(completeButton);
            text.appendChild(deleteButton);
            container.appendChild(text);
        }
    }
}

export {Facade};