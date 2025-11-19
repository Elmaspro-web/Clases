"use strict";

function analizarNotas()
{

    let pantalla = prompt("Dame notas separadas por comas, las notas con decimales iran con punto (5.5)");
    let valores = pantalla.split(",").map(v => v.trim());

    let notas = [];
    for (let valor of valores)
    {

        let valorInt = parseInt(valor);

        if (isNaN(valorInt))
        {
            mostrarError("Deben ser numeros");
            return;
        }

        if (valorInt < 0 || valorInt > 10)
        {
            mostrarError("Deben ser valores entre [0,10]");
            return;
        }

        notas.push(valor);

    }

    crearParrafo(notas);
    crearParrafo(aprobadosSuspensos(notas));

    let suma = 0;
    for (let i = 0; i < notas.length; i++)
    {
        suma += parseInt(notas[i]);
    }
    let media = suma/notas.length;
    crearParrafo(media);

    let notasOrdenadas = notas.sort((a, b) => a - b);
    crearParrafo(notasOrdenadas)

    let notasOrdenInverso = notasOrdenadas.toReversed();
    crearParrafo(notasOrdenInverso);

    crearParrafo(distribucionNotas(notas));

}

function distribucionNotas(notasArray) {
    let insuficiente = [];
    let suficienteBien = [];
    let notable = [];
    let sobresaliente = [];

    for (let valor of notasArray) {
        let nota = parseFloat(valor);

        if (nota < 5) {
            insuficiente.push(nota);
        } else if (nota < 7) {
            suficienteBien.push(nota);
        } else if (nota < 9) {
            notable.push(nota);
        } else {
            sobresaliente.push(nota);
        }
    }

    return `Insuficiente: ${insuficiente} - Suficiente/Bien: ${suficienteBien} - Notable: ${notable} - Sobresaliente: ${sobresaliente}`;
}

function aprobadosSuspensos(notasArray)
{
    let contadorAprobados = 0;
    let contadorSuspensos = 0;

    let notasAprobadas = [];
    for (let notasMayores of notasArray)
    {
        if (notasMayores >= 5)
        {
            contadorAprobados++;
            notasAprobadas.push(notasMayores);
        }
    }

    let notasSuspensas = [];
    for (let notasMenores of notasArray)
    {
        if (notasMenores < 5)
        {
            contadorSuspensos++;
            notasSuspensas.push(notasMenores);
        }
    }
    if (contadorSuspensos >= 1 && contadorAprobados >= 1)
    {
        return `Las notas aprobadas son: ${notasAprobadas}, mientras que las suspensas son: ${notasSuspensas}`;
    }
    else if (contadorSuspensos >= 1 && contadorAprobados === 0)
    {
        return  `Todas las notas son suspensos: ${notasSuspensas}`;
    }
    else
    {
        return `Todas las notas son aprobados: ${notasAprobadas}`;
    }

}

function crearParrafo(texto)
{
    const contenedor = document.getElementById("resultado");
    let parrafo = document.createElement("p");
    parrafo.textContent = texto;

    contenedor.appendChild(parrafo);

}

function mostrarError(mensaje)
{
    const contenedor = document.getElementById("resultado");
    let parrafo = document.createElement("p");
    parrafo.textContent = mensaje;

    contenedor.appendChild(parrafo);

}

window.onload = analizarNotas;