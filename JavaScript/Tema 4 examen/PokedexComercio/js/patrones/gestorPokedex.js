import {_addLocalStorage, _loadLocalStorage} from "../utilities/localStorageManager.js";
import {Pokemon} from "../models/pokemon.js";


export class GestorPokedex
{
    constructor() {
        if (GestorPokedex.instance) return GestorPokedex.instance;
        this.listaPokemon = _loadLocalStorage() || [];
        GestorPokedex.instance = this;
    }

    aniadirPokemon(nombre, tipo, nivel) {
        const pokemon = new Pokemon(nombre, tipo, nivel);
        this.listaPokemon.push(pokemon);
        _addLocalStorage(this.listaPokemon);
        return pokemon;
    }

    promedioFuego()
    {
        let promedioF = 0;
        let cantidadF = 0;
        for (let i = 0; i < this.listaPokemon.length; i++) {
            const pokemonUnico = this.listaPokemon[i];
            if (pokemonUnico.tipo === "Fuego")
            {
                cantidadF++;
                promedioF += parseInt(pokemonUnico.nivel);
            }
        }
        return (Math.floor((promedioF/cantidadF)*10)/10);
    }

    promedioAgua()
    {
        let promedioA = 0;
        let cantidadA = 0;
        for (let i = 0; i < this.listaPokemon.length; i++) {
            const pokemonUnico = this.listaPokemon[i];
            if (pokemonUnico.tipo === "Agua")
            {
                cantidadA++;
                promedioA += parseInt(pokemonUnico.nivel);
            }
        }
        return (Math.floor((promedioA/cantidadA)*10)/10);
    }

    promedioPlanta()
    {
        let promedioP = 0;
        let cantidadP = 0;
        for (let i = 0; i < this.listaPokemon.length; i++) {
            const pokemonUnico = this.listaPokemon[i];
            if (pokemonUnico.tipo === "Planta")
            {
                cantidadP++;
                promedioP += parseInt(pokemonUnico.nivel);
            }
        }
        return (Math.floor((promedioP/cantidadP)*10)/10);
    }

    eliminarPokemons() {
        for (let i = this.listaPokemon.length; i >= 0; i--)
        {
            this.listaPokemon.splice(i, 1);
        }
        _addLocalStorage(this.listaPokemon)
    }

    getPokemons() {
        return this.listaPokemon;
    }
}