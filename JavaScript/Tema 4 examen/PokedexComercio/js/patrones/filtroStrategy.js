export class FiltroStrategy
{
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    filter(listaPokemon, nombre) {
        return this.strategy.filter(listaPokemon, nombre);
    }
}
export class FiltrarNombre {
    filter(listaPokemon, nombre) {
        return listaPokemon.filter(pokemon => pokemon.nombre === nombre);
    }
}
export class FiltrarTipo {
    filter(listaPokemon, tipo) {
        return listaPokemon.filter(pokemon => pokemon.tipo === tipo);
    }
}