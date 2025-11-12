import {Singleton} from "../patterns/singleton.js";

class Facade
{
    constructor()
    {
        this.singleton = new Singleton();
        this.strategy = null;
    }

    renderTask()
    {
        const container = document.getElementById("seeTask");
        container.innerHTML = "";
        for (let i = 0; i < this.singleton.tasks.length; i++)
        {
            const tarea = this.singleton.tasks[i];

            const text = document.createElement("div");

            if (tarea.done === true)
            {
                text.style.backgroundColor = "purple";
                text.style.color = "white";
            }
            else if (tarea.priority === "high")
            {
                text.style.backgroundColor = "lightcoral";
            }
            else if (tarea.priority === "low")
            {
                text.style.backgroundColor = "lightyellow";
            }
            else if (tarea.priority === "normal")
            {
                text.style.backgroundColor = "lightgreen";
            }

            text.classList.add("task-item");
            text.innerHTML = `
            <p>ID: ${tarea.id}</p>
            <p>Title: ${tarea.title}</p>
            <p>Description: ${tarea.description}</p>
            <p>Priority: ${tarea.priority}</p>
            <p>Status: ${tarea.done ? "Completada" : "No Completada"}</p>
            <p>Date: ${tarea.createAt}</p>
            `
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Eliminar";
            deleteButton.addEventListener("click", () => {
                this.deleteTask(tarea.id); // método del Facade
            });

            const completeButton = document.createElement("button");
            completeButton.textContent = tarea.done ? "Descompletar" : "Completar";
            completeButton.addEventListener("click", () => {
                this.toggleTask(tarea.id);
            });

            text.appendChild(completeButton);
            text.appendChild(deleteButton);
            container.appendChild(text);
        }
    }

    toggleTask(id)
    {
        const index = this.singleton.tasks.findIndex(tarea => tarea.id === id);
        this.singleton.toggleTaskStatus(index);
        this.renderTask();
    }

    deleteTask(id)
    {
        const index = this.singleton.tasks.findIndex(tarea => tarea.id === id);
        this.singleton.removeTask(index);
        this.renderTask();
    }
    createTask(title, description, priority, done)
    {
        this.singleton.addTask(title, description, priority, done);
        this.singleton._addLocalStorage();
        this.renderTask();
    }

}

export {Facade};