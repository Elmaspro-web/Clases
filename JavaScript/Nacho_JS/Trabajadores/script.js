import {Trabajador} from './trabajadorModel.js';

const aniadirTrabajadorBoton = document.getElementById("botonTrabajadorMas");
const formularioTrabajador = document.getElementById("formularioTrabajador");
const listaTrabajadores = document.getElementById("verTrabajadores");
let guardarTrabajador = JSON.parse(localStorage.getItem("Trabajador")) || [];

window.addEventListener("DOMContentLoaded", () => {
    guardarTrabajador.forEach(trabajadorData => {
        const trabajador = new Trabajador(
            trabajadorData.nombre,
            trabajadorData.apellido,
            trabajadorData.cargo,
            trabajadorData.salario
        );
        mostrarTrabajador(trabajador);
    });
});

aniadirTrabajadorBoton.addEventListener("click", event => {
    formularioTrabajador.classList.remove("hidden")
});
formularioTrabajador.addEventListener("submit", event => {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const cargo = document.getElementById("cargo").value;
    const salario = document.getElementById("salario").value;

    const nuevoTrabajador = new Trabajador(nombre, apellido, cargo, salario);
    guardarTrabajador.push(nuevoTrabajador);

    localStorage.setItem("Trabajador", JSON.stringify(guardarTrabajador));

        formularioTrabajador.classList.add("hidden");
        window.location.reload();
});

function mostrarTrabajador(trabajador) {
    const divTrabajador = document.createElement("div");
    divTrabajador.className = "divHijoTrabajador";
    divTrabajador.innerHTML = `
    <p>
      <strong>${trabajador.getNombreCompleto()}</strong>: 
      ${trabajador.cargo} - $${trabajador.salario}
    </p>
  `;
    listaTrabajadores.appendChild(divTrabajador);
}