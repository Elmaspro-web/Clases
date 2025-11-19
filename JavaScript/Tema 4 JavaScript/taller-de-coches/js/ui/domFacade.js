export class DomFacade
{
    mostrarVehiculos(arrayVehiculos)
    {
        const contenedorVehiculos = document.getElementById("idVerVehiculos");
        contenedorVehiculos.innerHTML = "";
        for (let i = 0; i < arrayVehiculos.length; i++)
        {
            const vehiculo = arrayVehiculos[i];
            const contenedorVehiculo = document.createElement("div");

            contenedorVehiculo.innerHTML = `
            <p>Marca: ${vehiculo.marca}</p>
            <p>Modelo: ${vehiculo.modelo}</p>
            <p>Tipo: ${vehiculo.tipo}</p>
            <p>Combustible: ${vehiculo.combustible}</p>
            `
            contenedorVehiculos.appendChild(contenedorVehiculo);
        }


    }
}