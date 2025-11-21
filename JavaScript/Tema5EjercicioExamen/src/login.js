"use strict"

import {_getLoginLocalStorage} from "./utilities/storage.js";

const formularioLogin = document.getElementById("formularioLogin");
let arrayUsuarios = _getLoginLocalStorage() || [];
formularioLogin.addEventListener("submit", function (event)
{
    event.preventDefault()

    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;

    if (arrayUsuarios.find(u => u.usuario === usuario && u.clave === clave))
    {
        window.location.href = "juego.html";
    }
    else
    {
        window.location.href = "registro.html";
    }

});