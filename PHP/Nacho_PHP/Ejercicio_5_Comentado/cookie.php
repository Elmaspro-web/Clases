<?php

if(!isset($_COOKIE["visitas"]))
{
    setcookie("visitas", "1", time() + 3600);
    echo "BIENVENIDO";
}
else
{
    $visitas = $_COOKIE["visitas"];
    $visitas++;
    setcookie("visitas", $visitas, time() + 3600);
    echo "VISITA: $visitas";
}

if ($visitas >= 10)
{
    echo "<br>";
    echo "Cookie eliminada. Reseteando el contador de visitas.";
    setcookie("visitas", "", time() - 3600);
}