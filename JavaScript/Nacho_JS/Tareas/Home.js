
const parrafo = document.createElement("p");

if (localStorage.getItem("contadorTareas") === null)
{
    parrafo.textContent = "No hay tareas";
}
else
{
    parrafo.textContent = localStorage.getItem("contadorTareas") + " Tareas creadas";
}

document.body.prepend(parrafo);