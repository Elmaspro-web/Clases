"use strict";

const animalesFantasticos = [
    "dragón",
    "fénix",
    "unicornio",
    "grifo",
    "hidra",
    "kraken",
    "pegaso",
    "basilisco",
    "quimera",
    "minotauro"
];

function obtenerPalabraAleatoria() {
    const indice = Math.floor(Math.random() * animalesFantasticos.length);
    return animalesFantasticos[indice];
}

const main = document.getElementById("mainJuego");
const lineaArriba = document.getElementById("lineaArriba");
const vidas = document.getElementById("vidas");
let contador = 3;
let listaPalabrasPantalla = [];
const input = document.getElementById("palabraEscrita");

input.addEventListener("keyup", e => {

    if (e.key === "Enter"){
        for (const element of listaPalabrasPantalla) {
            if (element === input.value){
                listaPalabrasPantalla.splice(element ,1);
                if (element === input.value){
                    element.textContent.remove();
                }
                //buscar la palabra en el array de palabras y borrar los divs que tengan como value esa palabra
            } // guardar divs
        }
    }
});

function crearYAnimarPalabra() {
    const palabraAleatoria = obtenerPalabraAleatoria();

    const contenedorPalabra = document.createElement("div");
    contenedorPalabra.textContent = palabraAleatoria;

    listaPalabrasPantalla.push(contenedorPalabra);

    contenedorPalabra.style.position = "absolute";

    const anchoDisponible = main.offsetWidth - 100;
    const posicionX = 50 + Math.floor(Math.random() * anchoDisponible);
    contenedorPalabra.style.left = posicionX + "px";

    lineaArriba.insertAdjacentElement("afterend", contenedorPalabra);
    contenedorPalabra.style.top = "5em";

    const intervalo = setInterval(() => {
        let top = parseInt(contenedorPalabra.style.top);
        contenedorPalabra.style.top = (top + 1) + "em";
        if (parseInt(contenedorPalabra.style.top) > 49) {
            contador--;
            clearInterval(intervalo)
            contenedorPalabra.remove();
            if (contador === 0)
            {
                vidas.textContent = "";
                alert("Has perdido");
                window.location.reload();
            }
            else if (contador === 2)
            {
                vidas.textContent = "💖💖";
            }
            else if (contador === 1)
            {
                vidas.textContent = "💖";
            }
        }
    }, 1000);

}



crearYAnimarPalabra();

setInterval(() => {
    crearYAnimarPalabra();
}, 5000);

