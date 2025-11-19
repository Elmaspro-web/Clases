"use strict";
import {TareasSingleton} from './patterns/GestorTareas.js';
import {DomFacade} from "./ui/domFacade.js";
import {_loadLocalStorage} from "./utilities/localStorageManager.js";
import {FiltroStrategy, FiltrarEstado, FiltrarPrioridad} from './patterns/filtroStrategy.js';



const domFacade = new DomFacade();
const singleton = new TareasSingleton();
const filtro = new FiltroStrategy();

const formulario = document.getElementById("idFormularioTarea");
const botonCompletar = document.getElementById("completarFiltroTareaBoton");
const botonPrioridad = document.getElementById("prioridadFiltroTareaBoton");

document.addEventListener("DOMContentLoaded", () => {
    domFacade.mostrarTarea(_loadLocalStorage());
});
formulario.addEventListener("submit", e => {

    const titulo = document.getElementById("idTitulo").value;
    const descripcion = document.getElementById("idDescripcion").value;
    const prioridad = document.getElementById("idPrioridad").value;


    singleton.aniadirTarea(titulo, descripcion, prioridad);

    domFacade.mostrarTarea(_loadLocalStorage());

    formulario.reset();
});

let estadoFiltro = 0;
let prioridadFiltro = 0;

botonCompletar.addEventListener("click", function (e) {

    e.preventDefault();

    filtro.setStrategy(new FiltrarEstado());

    const estados = [true, false, "ALL"];
    const filtroActual = estados[estadoFiltro];

    const tareasFiltradas = filtroActual === "ALL" ? singleton.getTareas() : filtro.filter(singleton.getTareas(), filtroActual);

    domFacade.mostrarTarea(tareasFiltradas);

    estadoFiltro = (estadoFiltro + 1) % estados.length;

});



botonPrioridad.addEventListener("click", function (e) {

    e.preventDefault();

    filtro.setStrategy(new FiltrarPrioridad());

    const prioridades = ["Baja", "Normal", "Alta", "ALL"];
    const actual = prioridades[prioridadFiltro];

    const tareasFiltradas = actual === "ALL" ? singleton.getTareas() : filtro.filter(singleton.getTareas(), actual);

    domFacade.mostrarTarea(tareasFiltradas);

    prioridadFiltro = (prioridadFiltro + 1) % prioridades.length;

});
