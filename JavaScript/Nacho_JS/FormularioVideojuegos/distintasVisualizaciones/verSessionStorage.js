import {Videojuego} from "../crearVideojuego/videojuegoModel.js";

let contenedor = document.getElementById("listaVideojuegosSession");
let verVideojuegos = JSON.parse(sessionStorage.getItem("Videojuego"));
let i = 0;
verVideojuegos.forEach(Videojuego => {
    i++;
    contenedor.innerHTML = contenedor.innerHTML + `<div class="videojuego"><div class="videojuegoHeader">Videojuego ${i}</div>
            <p>Nombre: ${Videojuego.nombre}</p>
            <p>Tipo: ${Videojuego.tipo}</p>
            <p>PEGI: ${Videojuego.pegi} años</p>
            <p>Nuevo: ${Videojuego.nuevo ? "Si" : "No"}</p>
        </div>`;
});