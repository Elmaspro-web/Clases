<?php

require_once '../Ejercicio_3_Comentado/Videojuegos2.php';

/* 2) Los campos se enviarán al mismo script
destino y se recibirán los valores de los
parámetros. Incluye para ello algún parámetro
de control que indique que el formulario
se ha enviado, independiente del resto de campos */

if (isset($_GET['Enviar']))
{
    echo "<p>Formulario recibido.</p>";
    $nombre = (string) $_GET['nombre'];
    $type = (string) $_GET['tipo'];
    $difficulty = (integer) $_GET['dificultad'];
    $horas = (integer) $_GET['horasMax'];
    echo "Nombre del juego: $nombre";
    echo "<br>";
    echo "El tipo del juego: $type";
    echo "<br>";
    echo "Su dificultad: $difficulty/10";
    echo "<br>";
    echo "Sus horas de juego totales son: $horas";
    echo "<br>";
    echo "<hr>";

    $camposVideojuegos = [
        'Nombre' => $_GET['nombre'],
        'Tipo' => $_GET['tipo'],
        'Dificultad' => $_GET['dificultad'],
        'HorasMax' => $_GET['horasMax'],
    ];

    /* 3) Al obtenerlos, como cadena, deberás convertirlos
    al tipo de dato primitivo que
    corresponda: integer, float, boolean,
    string (si es fecha mantenlo como cadena) y
    genera un mensaje que indique si se han
    recibido o no todos los parámetros en el propio
    script destino. */

    if (!empty($_GET['nombre']) && !empty($_GET['tipo']) && !empty($_GET['dificultad']) && !empty($_GET['horasMax']))
    {
        echo "Todos los parámetros están rellenados";
    }
    else
    {
        echo "Faltan parámetros";
    }
    echo "<br>";
    echo "<hr>";
}



$videojuego = new Videojuegos2($camposVideojuegos['Nombre'], $camposVideojuegos['Tipo'], $camposVideojuegos['Dificultad'], $camposVideojuegos['HorasMax']);

echo "La dificultad del juego es: " . $videojuego->getDifficulty();
echo "<br>";

