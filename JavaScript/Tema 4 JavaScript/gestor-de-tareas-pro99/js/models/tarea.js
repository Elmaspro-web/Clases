

class Tarea
{
    constructor(titulo, descripcion, prioridad, estado = false)
    {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.prioridad = prioridad;
        this.estado = estado;
        this.id = Date.now();
        this.fecha = new Date().toLocaleDateString();
    }
}

export {Tarea};