// Ejemplo de clase Tarea
class Tarea {
    constructor(titulo, descripcion, prioridad, fechaLimite) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.prioridad = prioridad;
        this.fechaLimite = fechaLimite;
    }
}

const lista = document.getElementById("listaTareas");
const btn = document.getElementById("btnCrear");

btn.addEventListener("click", () => {
    const titulo = prompt("Título de la tarea:");
    if (!titulo) return;
    const descripcion = prompt("Descripción de la tarea:") || "";
    const prioridad = prompt("Prioridad (Alta, Media o Baja):") || "Media";
    const fechaLimite = prompt("Fecha límite (YYYY-MM-DD):") || "";

    const tarea = new Tarea(titulo, descripcion, prioridad, fechaLimite);
});
