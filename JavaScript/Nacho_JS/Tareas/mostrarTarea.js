
const contenedorTareas = document.getElementById("contenedorVerTareas");
// obtiene del DOM el elemento con id "contenedorVerTareas" donde se insertarán las tarjetas de tareas.

let tareasVer = JSON.parse(localStorage.getItem("Tareas"));
// lee la clave "Tareas" del localStorage y la transforma en array.

let tareaTF = false;
// variable booleana global

contenedorTareas.innerHTML = "";
// se borra todo para que al crearlas de nuevo tengan su numero correcto

tareasVer.forEach(((Tarea, i) => {
    i++;
    // incrementas i para que la numeración visual empiece en 1 (visualmente Tarea 1, Tarea 2, ...)
    // OJO: el array empieza desde 0, por eso luego se resta 1 cuando se actua sobre el array.

    contenedorTareas.innerHTML += `<div class="tarea" id="tarea-${i}"> 
            <div class="tareaHeader">Tarea ${i}</div>
            <p>Título: ${Tarea.titulo}</p>
            <p>Descripción: ${Tarea.descripcion}</p>
            <p>Prioridad: ${Tarea.prioridad}</p>
            <p>Fecha límite: ${Tarea.fechaLimite}</p>
            <button class="btn-completar" data-id="${i}">  ${tareaTF ? "Desmarcar" : "Completar"}</button>
            <button class="btn-eliminar" data-id="${i}">Eliminar</button>
        </div>`;
    // concatena HTML al contenedor por cada tarea.
    // data-id="${i}" guarda la numeración visual (1..N). Cuando se manipule el array hay que usar id-1.
}));

document.querySelectorAll(".btn-completar").forEach(boton => {
    boton.addEventListener("click", function (event) {

        const id = event.target.getAttribute("data-id");
        // toma el data-id del botón clicado (cadena tipo "1","2"...). SOLO VISUAL.

        const divTarea = document.getElementById(`tarea-${id}`);
        // busca el div correspondiente por el id tipo "tarea-1", "tarea-2"...

        if (divTarea.style.backgroundColor === "lightgreen") {
            tareaTF = false;
            divTarea.style.backgroundColor = "";
            event.target.textContent = "Completar";
            // si el fondo ya era verde, lo quita y pone el texto "Completar".
            // OJO: solo cambia el DOM y la variable global tareaTF. NO modifica tareasVer ni localStorage.
        } else {
            tareaTF = true;
            divTarea.style.backgroundColor = "lightgreen";
            event.target.textContent = "Desmarcar";
            // vuelve a poner el fondo verde y cambia el texto.
            // de nuevo: cambio sólo visual y en la variable global; no es persistente.
        }
    });
});

document.querySelectorAll(".btn-eliminar").forEach(boton => {
    boton.addEventListener("click", function (event) {

        const id = parseInt(event.target.getAttribute("data-id"));
        // obtiene el data-id y lo convierte a número. data-id es la numeración visual (1..N).

        tareasVer.splice(id - 1, 1);
        // elimina del array tareasVer el elemento en la posición (id - 1).

        localStorage.setItem("Tareas", JSON.stringify(tareasVer));
        // actualiza el localStorage con el array ya modificado. Esto evita que la tarea vuelva a recargarse.

        const contadorTareas = tareasVer.length;
        localStorage.setItem("contadorTareas", contadorTareas);
        // actualiza también la clave "contadorTareas" con la nueva longitud del array.

        document.getElementById(`tarea-${id}`).remove();
        // elimina visualmente del DOM el elemento que tenía id "tarea-X".

        alert("Tarea eliminada bien");
        // notificación al usuario. Puedes sustituir por una notificación no intrusiva si prefieres.
    });
});

