<?php

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (!isset($_SESSION['usuario']))
    {
        $_SESSION['usuario'] = $_POST['usuario'];
        if ($_SESSION['usuario'] === 'nacho')
        {
            echo "Usuario correcto";
        }
        else
        {
            echo "Usuario incorrecto";
        }
    }

    session_destroy();
}