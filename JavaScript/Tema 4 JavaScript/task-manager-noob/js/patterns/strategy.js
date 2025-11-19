export class FilterStrategy
{
    setStrategy(strategy)
    {
        return this.strategy = strategy;
    }

    filter(id)
    {
        this.strategy.filter(id);
    }
}
export class FilterByStatus
{
    filter(task)
    {
        // Devuelve solo las tareas donde tarea.done coincide con done
        return task.filter(tarea => tarea.done);
    }
}

export class FilterByPriority
{
    filter(task, priority)
    {
        // Devuelve solo las tareas donde tarea.priority coincide con el valor dado
        return task.filter(tarea => tarea.priority === priority);
    }
}