"use strict"

import {_addLocalStorage, _getLoginLocalStorage} from "./utilities/storage.js";
import {DomManager} from "./patterns/DomManager.js";
import {Usuario} from "./models/Usuario.js";

const domManager = new DomManager();
let listaUsuarios = _getLoginLocalStorage() || [];

document.addEventListener("DOMContentLoaded", function(e){

    e.preventDefault()
    if (_getLoginLocalStorage() !== null)
    {
        domManager.loginDom();

        const botonLogin = document.getElementById("botonLogin");

        botonLogin.addEventListener("submit", function(e){

            const usuarioLogin = document.getElementById("usuario").value;
            const contrasenaLogin = document.getElementById("contrasena").value;

            for (const valido of listaUsuarios) {
                if (valido.usuario === usuarioLogin && valido.contrasena === contrasenaLogin)
                {
                    e.preventDefault();
                    domManager.gameDom();
                }
            }
        });
    }
    else
    {
        domManager.registerDom();
        const botonRegistrarse = document.getElementById("botonRegistrarse");

        botonRegistrarse.addEventListener("submit", function(e){

            const usuarioRegistro = document.getElementById("usuario").value;
            const contrasenaRegistro = document.getElementById("contrasena").value;

            const nuevoUser = new Usuario(usuarioRegistro, contrasenaRegistro);
            listaUsuarios.push(nuevoUser);

            _addLocalStorage(listaUsuarios);
        });
    }
});