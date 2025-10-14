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

