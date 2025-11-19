

export class Pokemon
{
    constructor(nombre, tipo, nivel)
    {
        this.nombre = nombre;
        this.tipo = tipo;
        this.nivel = nivel;
        this.fecha = new Date().toLocaleDateString();
    }
}