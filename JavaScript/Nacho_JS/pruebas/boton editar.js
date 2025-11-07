/*
const botonEditar = document.createElement("input");
botonEditar.type = "button";
botonEditar.value = "Editar";
botonEditar.className = "botonEditar";
divTrabajador.appendChild(botonEditar);

botonEditar.addEventListener("click", function (event){
    const p1 = document.createElement("p");
    p1.textContent = "Nombre";
    const inputNombre = document.createElement("input");
    const p2 = document.createElement("p");
    p2.textContent = "Apellido";
    const inputApellido = document.createElement("input");
    const p3 = document.createElement("p");
    p3.textContent = "Cargo";
    const inputCargo = document.createElement("input");
    const p4 = document.createElement("p");
    p4.textContent = "Salario";
    const inputSalario = document.createElement("input");

    inputNombre.value = trabajador.nombre;
    inputApellido.value = trabajador.apellido;
    inputCargo.value = trabajador.cargo;
    inputSalario.value = trabajador.salario;

    divTrabajador.innerHTML = "";
    divTrabajador.appendChild(p1);
    divTrabajador.appendChild(inputNombre);
    divTrabajador.appendChild(p2);
    divTrabajador.appendChild(inputApellido);
    divTrabajador.appendChild(p3);
    divTrabajador.appendChild(inputCargo);
    divTrabajador.appendChild(p4);
    divTrabajador.appendChild(inputSalario);

    const btnGuardar = document.createElement("input");
    btnGuardar.type = "button";
    btnGuardar.value = "Guardar";
    btnGuardar.className = "botonGuardar";
    divTrabajador.appendChild(btnGuardar);

    btnGuardar.addEventListener("click", () => {
        trabajador.nombre = inputNombre.value.trim();
        trabajador.apellido = inputApellido.value.trim();
        trabajador.cargo = inputCargo.value.trim();
        trabajador.salario = inputSalario.value.trim();

        const index = guardarTrabajador.findIndex(
            t => t.nombre === trabajador.nombre && t.apellido === trabajador.apellido
        );
        if (index !== -1) {
            guardarTrabajador[index] = trabajador;
        }
        localStorage.setItem("Trabajador", JSON.stringify(guardarTrabajador));

        divTrabajador.innerHTML = "";
        mostrarTrabajador(trabajador);
    });
});
listaTrabajadores.appendChild(divTrabajador);
}
*/