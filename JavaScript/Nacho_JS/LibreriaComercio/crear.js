"use strict"
import { Libro } from "./libroModel.js";

let arrayInfoLibro = cargarLibro() || [];

let boton = document.querySelector(".dosDiv.crear");
boton.addEventListener("click", (event) => {
    event.preventDefault();

    let nombreLibro = document.getElementById("nombreCrear").value;
    let paginasLibro = document.getElementById("paginasCrear").value;
    let prestadoLibro = document.getElementById("prestadoCrear").checked;

    let libro = new Libro(nombreLibro,paginasLibro,prestadoLibro);

    arrayInfoLibro.push(libro);
    aniadirLibro(arrayInfoLibro);
});

function aniadirLibro(arrayInfoLibro)
{
    let almacenSesion = JSON.stringify(arrayInfoLibro);
    return sessionStorage.setItem("Libro", almacenSesion);
}

function cargarLibro()
{

    return JSON.parse(sessionStorage.getItem('Libro'));
}