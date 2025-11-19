export class FiltroStrategy
{
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    filter(listaTareas, dato) {
        return this.strategy.filter(listaTareas, dato);
    }
}
export class FiltrarEstado {
    filter(listaTareas, estado) {
        return listaTareas.filter(tarea => tarea.estado === estado);
    }
}
export class FiltrarPrioridad {
    filter(listaTareas, prioridad) {
        return listaTareas.filter(tarea => tarea.prioridad === prioridad);
    }
}