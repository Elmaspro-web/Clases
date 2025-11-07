
class Trabajador
{

    constructor(nombre, apellido, cargo, salario)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.salario = salario;
    }

    getNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
    getDescripcion() {
        return `${this.getNombreCompleto()}: ${this.cargo} - $${this.salario}`;
    }

}

export {Trabajador};