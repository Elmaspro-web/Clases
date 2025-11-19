"use strict";

import {Singleton} from './patrones/gestorVehiculos.js'
import {DomFacade} from "./ui/domFacade.js";
import {_loadLocalStorage} from "./utilities/localStorageManager.js";

const singleton = new Singleton();
const facade = new DomFacade();

const formularioTaller = document.getElementById("idFormularioVehiculos");

document.addEventListener("DOMContentLoaded", () =>
{
    facade.mostrarVehiculos(_loadLocalStorage())
});

formularioTaller.addEventListener("submit", e => {

    e.preventDefault();

    const marcaVehiculo = document.getElementById("idMarca").value;
    const modeloVehiculo = document.getElementById("idModelo").value;
    const tipoVehiculo = document.getElementById("idTipo").value;
    const combustibleVehiculo = document.getElementById("idCombustible").value;

    singleton.aniadirVehiculo(marcaVehiculo, modeloVehiculo, tipoVehiculo, combustibleVehiculo);

    facade.mostrarVehiculos(_loadLocalStorage());
});