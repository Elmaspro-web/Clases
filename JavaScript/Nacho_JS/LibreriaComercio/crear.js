"use strict"
import { Libro } from "./libroModel.js";

let boton = document.querySelector(".dosDiv.crear");
boton.addEventListener("click", (event) => {
    event.preventDefault();
    let nombreLibro = document.getElementById("nombreCrear").value;
    let paginasLibro = document.getElementById("paginasCrear").value;
    let prestadoLibro = document.getElementById("prestadoCrear").checked;

    let libro = new Libro(nombreLibro,paginasLibro,prestadoLibro);
    let stringLibro = libro.toString();
    window.alert(stringLibro);

});