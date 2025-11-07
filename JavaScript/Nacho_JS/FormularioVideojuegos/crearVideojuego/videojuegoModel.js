
class Videojuego
{
    constructor(nombre, tipo, pegi, nuevo)
    {
        this.nombre = nombre;
        this.tipo = tipo;
        this.pegi = pegi;
        this.nuevo = nuevo;
    }

    toString()
    {

        if (this.nuevo === true)
        {
            this.nuevo = "Es un juego nuevo";
        }
        else
        {
            this.nuevo = "No es un juego nuevo";
        }

        return "Videojuego: " + this.nombre + "<br>" +
            "Tipo: " + this.tipo + "<br>" +
            "Edad recomendada: " + this.pegi + " años<br>" +
            this.nuevo;
    }
}

export {Videojuego};