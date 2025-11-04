import { Libro } from "./libroModel.js";

let contenedor = document.getElementById("listaLibros");
let verLibros = JSON.parse(sessionStorage.getItem("Libro"));
let i = 0;
verLibros.forEach(Libro => {
    i++;
    contenedor.innerHTML = contenedor.innerHTML + `<div class="libro"><div class="libroHeader">Libro ${i}</div>
            <p>Nombre Autor: ${Libro.nombre}</p>
            <p>Páginas: ${Libro.paginas}</p>
            <p>Prestado: ${Libro.prestado ? "Si" : "No"}</p>
        </div>`;
});
