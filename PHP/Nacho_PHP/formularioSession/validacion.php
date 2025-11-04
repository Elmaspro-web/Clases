<?php

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (!isset($_SESSION['usuario']))
    {
        $_SESSION['usuario'] = $_POST['usuario'];
        if ($_SESSION['usuario'] === 'nacho' || $_POST['contraseña'] === '1234')
        {
            header('Location: calculos.php');
        }
        else
        {
            header("Location: error.php");
        }
    }

    session_destroy();
}