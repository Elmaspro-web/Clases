
class Tarea
{
    constructor(titulo, descripcion, prioridad, estado = "No completado")
    {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.prioridad = prioridad;
        this.estado = estado;
        this.fechaCreacion = new Date().toLocaleDateString();
    }
}

export {Tarea};