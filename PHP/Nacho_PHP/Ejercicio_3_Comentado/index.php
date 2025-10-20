<?php

require_once './Videojuegos2.php';

/* B) Instancia tres objetos de dicha clase
en un script individual. */

$juegoUno = new Videojuegos2("Pokemon ZA","RPG por turnos","1/10", "");
$juegoDos = new Videojuegos2("Elden Ring","RPG","10/10", "");
$juegoTres = new Videojuegos2("Borderlands 4","RPG","6/10", "");

echo $juegoUno->getDifficulty();
echo "<br>";
echo $juegoDos->getPlataforma();
echo "<br>";
echo $juegoTres->getNombre();
echo "<br>";
echo $juegoUno->iniciar();
echo "<br>";
echo $juegoDos->detener();
echo "<br>";
echo $juegoTres->actualizar(['difficulty' => '2/10']);