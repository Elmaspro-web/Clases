"use strict"

import {FiltrarNombre, FiltroStrategy, FiltrarTipo} from './patrones/filtroStrategy.js'
import {GestorPokedex} from "./patrones/gestorPokedex.js";
import {DomFacade} from "./ui/domFacade.js";
import {_loadLocalStorage} from "./utilities/localStorageManager.js";

const filtro = new FiltroStrategy();
const singleton = new GestorPokedex();
const facade = new DomFacade();

const formulario = document.getElementById("idFormularioPokemon");
let primeraVez = 0;

document.addEventListener("DOMContentLoaded", () => {
    facade.mostrarPokedex(_loadLocalStorage());
    if (primeraVez === 0){
        primeraVez++;
        facade.mostrarEstadisticas(_loadLocalStorage());
    }
});

formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const nombre = document.getElementById("idNombre").value;
    const tipo = document.getElementById("idTipo").value;
    const nivel = document.getElementById("idNivel").value;

    singleton.aniadirPokemon(nombre, tipo, nivel);

    facade.mostrarPokedex(_loadLocalStorage());

});

const botonEstadisticas = document.getElementById("idGenerarEstadisticas");
const botonEliminar = document.getElementById("idEliminarPokemons");

botonEstadisticas.addEventListener("click", e => {
    facade.mostrarEstadisticas(_loadLocalStorage());
});

botonEliminar.addEventListener("click", e => {
    singleton.eliminarPokemons();
    facade.mostrarPokedex(_loadLocalStorage());
});

const buscador = document.getElementById("idBuscadorReal");
let guardarKeys = ""
buscador.addEventListener("keydown", (e) => {

    filtro.setStrategy(new FiltrarNombre());
    guardarKeys += e.key
    const texto =  guardarKeys;

    facade.mostrarPokedex(filtro.filter(singleton.getPokemons(), texto));

});