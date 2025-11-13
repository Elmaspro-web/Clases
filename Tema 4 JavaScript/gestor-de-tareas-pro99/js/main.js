"use strict";
import {TareasSingleton} from './patterns/GestorTareas.js';
import {DomFacade} from "./ui/domFacade.js";
import {_addLocalStorage, _loadLocalStorage} from "./utilities/localStorageManager.js";
import {FiltroStrategy, FiltrarEstado, FiltrarPrioridad} from './patterns/filtroStrategy.js';



const domFacade = new DomFacade();
const singleton = new TareasSingleton();
const filtro = new FiltroStrategy();

let guardarTarea = _loadLocalStorage() || [];


const formulario = document.getElementById("idFormularioTarea");
const botonCompletar = document.getElementById("completarFiltroTareaBoton");
const botonPrioridad = document.getElementById("prioridadFiltroTareaBoton");

document.addEventListener("DOMContentLoaded", () => {
    domFacade.mostrarTarea(guardarTarea);
});
formulario.addEventListener("submit", e => {

    const titulo = document.getElementById("idTitulo").value;
    const descripcion = document.getElementById("idDescripcion").value;
    const prioridad = document.getElementById("idPrioridad").value;

    const tarea = singleton.aniadirTarea(titulo, descripcion, prioridad);
    guardarTarea.push(tarea);
    _addLocalStorage(guardarTarea);
    domFacade.mostrarTarea(guardarTarea);

    formulario.reset();
});

let estadoFiltro = 0;

botonCompletar.addEventListener("click", function (e) {

    e.preventDefault();

    let tareasFiltradas;
    filtro.setStrategy(new FiltrarEstado());

    if (estadoFiltro === 0) {
        tareasFiltradas = filtro.filter(singleton.getTareas(), true);
    } else if (estadoFiltro === 1) {
        tareasFiltradas = filtro.filter(singleton.getTareas(), false);
    } else if (estadoFiltro === 2) {
        tareasFiltradas = singleton.getTareas();
    }

    domFacade.mostrarTarea(tareasFiltradas);
    estadoFiltro = (estadoFiltro + 1) % 3;
});

let prioridadFiltro = 0;

botonPrioridad.addEventListener("click", function (e) {

    e.preventDefault();

    if (prioridadFiltro === 0) {
        const bajo = singleton.getTareas().filter(t => t.prioridad === "Baja");
        domFacade.mostrarTarea(bajo);
    } else if (prioridadFiltro === 1) {
        const normal = singleton.getTareas().filter(t => t.prioridad === "Normal");
        domFacade.mostrarTarea(normal);
    } else if (prioridadFiltro === 2) {
        const alta = singleton.getTareas().filter(t => t.prioridad === "Alta");
        domFacade.mostrarTarea(alta);
    }
    else if (prioridadFiltro === 3) {
        domFacade.mostrarTarea(singleton.getTareas());
    }

    prioridadFiltro = (prioridadFiltro + 1) % 4;

});
