"use strict"

import {_loadLocalStorage} from "./utilities/localStorageManager.js";

const mainJuego = document.getElementById("mainJuego");

document.addEventListener("DOMContentLoaded", e =>{
    const cantidad = _loadLocalStorage("Globos");
    const body = document.getElementById("body");
    const globos = [
        "blue_Circle.png",
        "Green_Circle.png",
        "redCircle.png"
    ];
    function obtenerCirculo() {
        const indice = Math.floor(Math.random() * globos.length);
        return globos[indice];
    }
    function crearYanimar()
    {
        const circuloAleatorio = obtenerCirculo();

        const imagen = document.createElement("div");
        imagen.innerHTML = `
            <img src="${circuloAleatorio}" width="50px" height="50px">
        `;

        imagen.style.position = "absolute";

        const anchoDisponible = body.offsetWidth - 100;
        const altoDisponible = body.offsetHeight;
        const posicionX = 50 + Math.floor(Math.random() * anchoDisponible);
        const posicionY = 50 + Math.floor(Math.random() * altoDisponible);
        imagen.style.left = posicionX + "px";
        imagen.style.top = posicionY + "px";
        document.body.appendChild(imagen);
    }
    for (let i = 0; i < cantidad; i++) {
        crearYanimar();
        let parrafo = document.createElement("section");
        parrafo.innerHTML = `
            <img src="./blanco.png" height="50px" width="50px">
        `;
        mainJuego.appendChild(parrafo);
    }

});