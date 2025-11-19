import {GestorPokedex} from "../patrones/gestorPokedex.js";

export class DomFacade {

    constructor() {
        this.singleton = new GestorPokedex();
    }

    mostrarPokedex(guardarPokemon) {
        const contenedor = document.getElementById("verPokemons");
        contenedor.innerHTML = "";
        for (let i = 0; i < guardarPokemon.length; i++) {

            const pokemonUnico = guardarPokemon[i];

            const contenedorPokemon = document.createElement("section");

            contenedorPokemon.innerHTML =
                `<h1>${pokemonUnico.nombre}</h1>
                <p>Tipo: ${pokemonUnico.tipo}</p>
                <p>Nivel: ${pokemonUnico.nivel}</p>
                <p>Capturado: ${pokemonUnico.fecha}</p>`

            contenedor.appendChild(contenedorPokemon);
        }
    }

    mostrarEstadisticas(guardarPokemon)
    {
        const parrafoFuego = document.getElementById("idNivelPromedioFuego");
        const parrafoAgua = document.getElementById("idNivelPromedioAgua");
        const parrafoPlanta = document.getElementById("idNivelPromedioPlanta");

        parrafoFuego.textContent = isNaN(this.singleton.promedioFuego()) ? "Promedio nivel: 0" : `Promedio nivel: ${this.singleton.promedioFuego()}`;
        parrafoAgua.textContent = isNaN(this.singleton.promedioAgua()) ? "Promedio nivel: 0" : `Promedio nivel: ${this.singleton.promedioAgua()}`;
        parrafoPlanta.textContent = isNaN(this.singleton.promedioPlanta()) ? "Promedio nivel: 0" : `Promedio nivel: ${this.singleton.promedioPlanta()}`;
    }
}