<?php

$visitas = 0;

if(!isset($_COOKIE["visitas"]))
{
    setcookie("visitas", "1", time() + 3600);
    $mensaje = "BIENVENIDO";
}
else
{
    $visitas = $_COOKIE["visitas"];
    $visitas++;
    setcookie("visitas", $visitas, time() + 3600);
    $mensaje = "VISITA: $visitas";
}

if ($visitas >= 10)
{
    $mensaje = "Cookie eliminada. Reseteando el contador de visitas.";
    setcookie("visitas", "", time() - 3600);
}