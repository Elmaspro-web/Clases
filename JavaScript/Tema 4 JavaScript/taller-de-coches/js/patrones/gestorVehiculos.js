"use strict";

import {Vehiculos} from "../models/vehiculos.js";
import {_addLocalStorage, _loadLocalStorage} from "../utilities/localStorageManager.js";

export class Singleton
{
    constructor() {
        if (Singleton.instance) return Singleton.instance;
        this.listaVehiculos = _loadLocalStorage() || [];
        Singleton.instance = this;
    }

    aniadirVehiculo(marca,modelo,tipo,combustible)
    {
        const vehiculoNuevo = new Vehiculos(marca,modelo,tipo,combustible);
        this.listaVehiculos.push(vehiculoNuevo);
        _addLocalStorage(this.listaVehiculos);
    }

    getVehiculos()
    {
        return this.listaVehiculos;
    }
}