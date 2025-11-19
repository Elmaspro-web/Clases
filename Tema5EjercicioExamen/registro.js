"use strict";

import {_addLocalStorage, _getLoginLocalStorage} from "./storage.js";
import {Usuario} from "./Usuario.js";

const formularioRegistro = document.getElementById("formularioRegistro");
const arrayUsuarios = _getLoginLocalStorage() || [];

if (formularioRegistro) {
    formularioRegistro.addEventListener("submit", function (e) {

        e.preventDefault();

        const usuario = document.getElementById("usuario").value;
        const inputUsuario = document.getElementById("usuario");
        const clave = document.getElementById("clave").value;

        const nuevoUsuario = new Usuario(usuario, clave);

        if (arrayUsuarios.find(u => u.usuario === usuario)) {
            inputUsuario.setCustomValidity("Este usuario ya existe");
            inputUsuario.reportValidity();
        } else {
            inputUsuario.setCustomValidity("");
            arrayUsuarios.push(nuevoUsuario);
            _addLocalStorage(arrayUsuarios);
            window.location.href = "index.html";
        }
    });
}