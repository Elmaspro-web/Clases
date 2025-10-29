"use strict"
import { Libro } from "./libroModel.js";

let arrayInfoLibro = cargarLibro() || [];

let boton = document.querySelector(".dosDiv.crear");
boton.addEventListener("click", (event) => {
    event.preventDefault();
    let nombreLibro = document.getElementById("nombreCrear").value;
    let paginasLibro = document.getElementById("paginasCrear").value;
    let prestadoLibro = document.getElementById("prestadoCrear").checked ? 1:0;

    let libro = new Libro(nombreLibro,paginasLibro,prestadoLibro);

    aniadirLibro(arrayInfoLibro);
    arrayInfoLibro.push(libro);

    let nLibro = libro.toString();
    window.alert(nLibro);

});

function aniadirLibro(libro)
{
    let almacenSesion = JSON.stringify(libro);
    sessionStorage.setItem("Libro", almacenSesion);
}

function cargarLibro()
{
    sessionStorage.getItem('libro');
}