<?php

require_once './Videojuegos.php';
require_once './Ayuda.php';

$ayuda = new Ayuda();
define("N_JUEGOS", rand(1,10));
for ($i = 0; $i < N_JUEGOS; $i++)
{
    $juego = new Videojuegos($ayuda->nombreAlea(), $ayuda->nombreAlea(), $ayuda->nNpcsAlea());
    echo $juego->getNombre();
    echo "<br>";
    unset($juego);
    echo "<br>";
}

$prueba = new Videojuegos("Nacho", "pilin", 18);

echo $prueba->getPersonaje();
echo "<br>";
$prueba->setPersonaje(2);
echo $prueba->getPersonaje();
echo "<br>";

$pruebaUno = new Videojuegos(" :( ", " pilin ", 19);
echo $pruebaUno->getPersonaje();
