"use strict";

function ventasSemana()
{

    const diasSemana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
    const pantalla = prompt("Dame los valores separados por ',' 1 valor por cada día de la semana");
    let valores = pantalla.split(",").map(v => v.trim());

    let ventas = [];
    for (let valor of valores)
    {
        let venta = parseInt(valor);

        if (isNaN(venta))
        {
            mensajeError("Deben ser numeros enteros todos los datos");
            return;
        }

        if (venta !== parseFloat(valor))
        {
            mensajeError("Deben ser un numeros enteros");
            return;
        }

        if (venta < 0)
        {
            mensajeError("No pueden haber ventas negativas");
            return;
        }
        ventas.push(valor);
    }

    if (ventas.length > 7 || ventas.length < 7)
    {
        mensajeError("Debe haber 7 datos, 1 por cada dia de la semana");
        return;
    }

    let ventasTotales = totalVentas(ventas);
    let mediaDiaria = calcularMedia(ventas);
    let mejorDia = diaMayorVentas(ventas, diasSemana);
    let peorDia = diaMenorVentas(ventas, diasSemana);
    let superioresMedia = diasSuperioresMedia(mediaDiaria, diasSemana, ventas);

    crearParrafo(`Las ventas totales son: ${ventasTotales}`);
    crearParrafo(`Las ventas diarias de media son: ${mediaDiaria}`);
    crearParrafo(`${mejorDia}`)
    crearParrafo(`${peorDia}`)
    crearParrafo(`${superioresMedia}`)


    let porcentajes = [];
    for (let i = 0; i < ventas.length; i++)
    {
        let porcentaje = (parseInt(ventas[i])/ventasTotales)*100;
        porcentajes.push(`${diasSemana[i]}: ${porcentaje.toFixed(2)}%`)
    }
    crearSeccion("VENTAS DIARIAS %", porcentajes);
}

function crearSeccion(titulo, contenidoArray)
{
    let divContenedor = document.createElement("div");
    let parrafoTitulo = document.createElement("p");
    parrafoTitulo.textContent = titulo;
    divContenedor.appendChild(parrafoTitulo);

    for (let texto of contenidoArray) {
        let parrafo = document.createElement("p");
        parrafo.textContent = texto;
        divContenedor.appendChild(parrafo);
    }
    let contenedorPrincipal = document.getElementById("resultado");
    contenedorPrincipal.appendChild(divContenedor);
}


function diaMayorVentas(ventasArray, diasArray)
{
    let masVentas = Math.max(...ventasArray);
    let diaSemanaMasVentas = "";
    let contador = 0;

    for (let i = 0; i < ventasArray.length; i++)
    {
        if (parseInt(ventasArray[i]) === masVentas)
        {
            contador++;
            if (contador>1)
            {
                diaSemanaMasVentas += `, ${diasArray[i]}`
            }
            else
            {
                diaSemanaMasVentas = diasArray[i];
            }
        }
    }
    if (contador > 1)
    {
        return `Los dias: ${diaSemanaMasVentas}, son los que mas ventas han tenido con un total de ${masVentas} ventas cada uno`;
    }
    else
    {
        return `El ${diaSemanaMasVentas} es el que mas ventas ha tenido con ${masVentas} ventas`;
    }

}

function diaMenorVentas(ventasArray, diasArray)
{
    let menosVentas = Math.min(...ventasArray);
    let diaSemanaMenosVentas = "";
    let contador = 0;

    for (let i = 0; i < ventasArray.length; i++)
    {
        if (parseInt(ventasArray[i]) === menosVentas)
        {
            contador++;
            if (contador>1)
            {
                diaSemanaMenosVentas += `, ${diasArray[i]}`
            }
            else
            {
                diaSemanaMenosVentas = diasArray[i];
            }
        }
    }
    if (contador > 1)
    {
        return `Los dias: ${diaSemanaMenosVentas}, son los que menos ventas han tenido con un total de ${menosVentas} ventas cada uno`;
    }
    else
    {
        return `El ${diaSemanaMenosVentas} es el que menos ventas ha tenido con ${menosVentas} ventas`;
    }

}

function diasSuperioresMedia(media, diasArray, ventasArray)
{
    let mayorQueMedia = "";
    let contador = 0;
    for (let i = 0; i < ventasArray.length; i++)
    {
        if (parseInt(ventasArray[i]) >= media)
        {
            contador++;
            if (contador > 1)
            {
                mayorQueMedia += `, ${diasArray[i]}`
            }
            else
            {
                mayorQueMedia = `${diasArray[i]}`;
            }
        }
    }
    if (contador > 1)
    {
        return `Los dias: ${mayorQueMedia} superan o igualan la media (${media}) de ventas`;
    }
    else
    {
        return `El ${mayorQueMedia} supera o iguala la media (${media}) de ventas`;
    }

}

function calcularMedia(ventasArray)
{
    return totalVentas(ventasArray) / ventasArray.length;
}

function crearParrafo(texto)
{
    let contenedor = document.getElementById("resultado");
    let crearDivs = document.createElement("div");
    crearDivs.className = "divApartados";
    let parrafo = document.createElement("p");
    parrafo.textContent = texto;
    crearDivs.appendChild(parrafo);
    contenedor.appendChild(crearDivs);
}

function crearParrafoDos(texto)
{
    let contenedor = document.getElementById("resultado");
    let crearDivs = document.createElement("div");
    let parrafo = document.createElement("h1");
    parrafo.textContent = texto;
    crearDivs.appendChild(parrafo);
    contenedor.appendChild(crearDivs);
}

function crearParrafoTres(texto)
{
    let contenedor = document.getElementById("resultado");
    let crearDivs = document.createElement("div");
    let parrafo = document.createElement("p");
    parrafo.textContent = texto;
    crearDivs.appendChild(parrafo);
    contenedor.appendChild(crearDivs);
}




function totalVentas(ventas)
{
    let total = 0;
    for (let i = 0; i < ventas.length; i++)
    {
        total += parseInt(ventas[i]);
    }
    return total;
}

function mensajeError(mensaje)
{
    let contenedor = document.getElementById("resultado");
    let parrafo = document.createElement("p");
    parrafo.textContent = mensaje;
    contenedor.appendChild(parrafo);
}

window.onload = ventasSemana;