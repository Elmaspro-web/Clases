"use strict";

import {_addLocalStorage, _loadLocalStorage} from "./utilities/localStorageManager.js";

const formularioLogin = document.getElementById("formularioLogin");
const error = document.getElementById("error");

if (formularioLogin !== null){
formularioLogin.addEventListener("submit" , e => {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const contrasena = document.getElementById("contrasena").value;

    if (nombre === "nacho" && contrasena === "1234")
    {
        document.location = "./formularioGlobos.html";
    }
    else
    {
        error.innerHTML = '<p>Error al introducir los datos</p>';
        document.appendChild(error);
        document.location = "./index.html";
    }

});
}
const formularioGlobos = document.getElementById("formularioGlobos");

if (formularioGlobos !== null) {
    formularioGlobos.addEventListener("submit", e => {

        e.preventDefault();

        const numeroDia = document.getElementById("globos").value;

        if (numeroDia >= 15) {
            _addLocalStorage("Globos", numeroDia)
        } else {
            _addLocalStorage("Globos", 15)
        }

        document.location = "./game.html"

    });
}

