<?php

require_once "conexion.php";

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $edad = $_POST['edad'];
    $clave = $_POST['clave'];
    $email = $_POST['email'];
    $ip = $_SERVER['REMOTE_ADDR'];

    //$claveHash = password_hash($clave, PASSWORD_DEFAULT);

    try {
        $sql = "INSERT INTO usuarios (nombre, apellido, edad, clave, email, ListaIPs)
            VALUES (:nombre, :apellido, :edad, :clave, :email, :ListaIPs)";

        $statement = $conexion->prepare($sql);

        // Vincular los parámetros
        $statement->bindParam(':nombre', $nombre);
        $statement->bindParam(':apellido', $apellido);
        $statement->bindParam(':edad', $edad, PDO::PARAM_INT);
        $statement->bindParam(':clave', $clave);
        $statement->bindParam(':email', $email);
        $statement->bindParam(':ListaIPs', $ip);

        // Ejecutar la consulta
        $statement->execute();

        echo "Registro guardado correctamente.";

    } catch (PDOException $e) {
        echo "Error al guardar: " . $e->getMessage();
    }
}