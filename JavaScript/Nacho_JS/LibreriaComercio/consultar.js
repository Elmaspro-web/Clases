import { Libro } from "./libroModel.js";

let contenedor = document.getElementById("listaLibros");
let verLibros = JSON.parse(sessionStorage.getItem("Libro"));

verLibros.forEach(Libro => {
    contenedor.innerHTML = contenedor.innerHTML + `<div class="libro">
            <p>Nombre: ${Libro.nombre}</p>
            <p>Páginas: ${Libro.paginas}</p>
            <p>Prestado: ${Libro.prestado ? "Si" : "No"}</p>
        </div>`;
});
