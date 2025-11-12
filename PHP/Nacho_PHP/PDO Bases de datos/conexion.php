<?php

$host = "localhost";
$dbname = "formulario_db";
$user = "phpuser";
$pass = "1234";

try
{
    $conexion = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch (Exception $e)
{
   echo "Error de conexión: " . $e->getMessage();
}