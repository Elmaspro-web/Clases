"use strict"

import {Videojuego} from "./videojuegoModel.js";
import {aniadirSessionStorage} from "../funcionesAlmacenamiento/funcionAñadirSession.js";
import {mostrarSessionStorage} from "../funcionesAlmacenamiento/funcionMostrarSession.js";
import {aniadirLocal} from "../funcionesAlmacenamiento/funcionAñadirSesionLocal.js";

const formulario = document.getElementById("contenedorFormulario");

formulario.addEventListener("submit", function (event){

    event.preventDefault();

    const nombreVideojuego = document.getElementById("nombreVideojuego").value;
    const tipoVideojuego = document.getElementById("tipoVideojuego").value;
    const pegiVideojuego = document.getElementById("pegiVideojuego").value;
    const esNuevo = document.getElementById("esNuevo").checked;

    const crearVideojuego = new Videojuego(nombreVideojuego, tipoVideojuego, pegiVideojuego, esNuevo);

    const parrafo = document.createElement("p");
    const contenedor = document.createElement("div");

    contenedor.classList.add("contenedorResultado");

    parrafo.innerHTML = crearVideojuego.toString();
    contenedor.appendChild(parrafo);

    document.body.appendChild(contenedor);

    aniadirLocal(crearVideojuego);
    aniadirSessionStorage(crearVideojuego);

})