"use strict"

import {tareaFacade} from './patterns/TareaFacade.js';

const formularioEnviar = document.getElementById("idFormularioTarea");
tareaFacade.mostrarTareas();
formularioEnviar.addEventListener("submit", function (event) {

    event.preventDefault();

    const tituloTarea = document.getElementById("idTitulo").value;
    const descripcionTarea = document.getElementById("idDescripcion").value;
    const prioridadTarea = document.getElementById("idSelect").value;

    tareaFacade.crearTarea(tituloTarea, descripcionTarea, prioridadTarea);
    tareaFacade.mostrarTareas();

});