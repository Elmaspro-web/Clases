<?php
$conexion = null;
require_once "conexion.php";



if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    $nombre = $_POST['nombre'];
    $clave = $_POST['clave'];

    $sql = "SELECT nombre, clave FROM usuarios";

    $datos = $conexion->query($sql)->fetchAll(PDO::FETCH_ASSOC);

    foreach ($datos as $dato)
    {
        if ($nombre === $dato['nombre'] && $clave === $dato['clave'])
        {
            header('location:./index.php?autentificado=true');
        }else{
            header('location:./index.php?autentificado=false');
        }
    }
}