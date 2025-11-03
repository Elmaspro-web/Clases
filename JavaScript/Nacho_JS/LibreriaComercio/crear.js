// Activa el modo estricto de JavaScript para evitar errores comunes, como el uso de variables sin declarar.
"use strict"

// Importa la clase Libro desde el archivo "libroModel.js".
// Esta clase define la estructura de un libro con sus propiedades (nombre, páginas, prestado).
import { Libro } from "./libroModel.js";

// Carga los libros almacenados en sessionStorage (si existen).
// Si no hay ningún libro guardado, se inicializa con un array vacío.
let arrayInfoLibro = cargarLibro() || [];

// Busca en el documento HTML el botón que tiene las clases "dosDiv" y "crear".
// Este botón servirá para crear y guardar nuevos libros.
let boton = document.querySelector(".dosDiv.crear");

// Añade un evento al botón para que, al hacer clic, se ejecute la función que crea un nuevo libro.
boton.addEventListener("click", (event) => {
    // Evita que el formulario (si existe) se envíe y recargue la página al presionar el botón.
    event.preventDefault();

    // Obtiene el valor del campo de texto donde el usuario escribe el nombre del libro.
    let nombreLibro = document.getElementById("nombreCrear").value;
    // Obtiene el número de páginas del libro desde el campo correspondiente.
    let paginasLibro = document.getElementById("paginasCrear").value;
    // Comprueba si la casilla de "prestado" está marcada (true o false).
    let prestadoLibro = document.getElementById("prestadoCrear").checked;

    // Crea una nueva instancia (objeto) de la clase Libro con los datos introducidos por el usuario.
    let libro = new Libro(nombreLibro, paginasLibro, prestadoLibro);

    // Añade el nuevo libro al array que contiene toda la información de los libros.
    arrayInfoLibro.push(libro);

    // Llama a la función que guarda el array actualizado en sessionStorage.
    aniadirLibro(arrayInfoLibro);
});

// Función que guarda el array de libros en sessionStorage.
function aniadirLibro(arrayInfoLibro)
{
    // Convierte el array de objetos Libro en una cadena JSON para poder almacenarlo.
    let almacenSesion = JSON.stringify(arrayInfoLibro);

    // Guarda el JSON en sessionStorage bajo la clave "Libro".
    return sessionStorage.setItem("Libro", almacenSesion);
}

// Función que carga los libros almacenados desde sessionStorage.
function cargarLibro()
{
    // Recupera el valor guardado en sessionStorage con la clave "Libro" y lo convierte de JSON a un array de objetos.
    // Si no existe nada almacenado, devolverá null.
    return JSON.parse(sessionStorage.getItem('Libro'));
}