export class Vehiculos {
    constructor(marca, modelo, tipo, combustible, arreglado = false) {
        this.marca = marca;
        this.modelo = modelo;
        this.tipo = tipo;
        this.combustible = combustible;
        this.arreglado = arreglado;
        this.id = Date.now();
        this.fecha = new Date().toLocaleDateString();
    }
}