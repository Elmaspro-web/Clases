<?php

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST')
{

    $numero1 = $_POST['numeroUno'];
    $numero2 = $_POST['numeroDos'];
    $operaciones = $_POST['operaciones'];
    $resultado = true;


    $resultadoOperaciones = match ($operaciones) {
        'suma' => $numero1 + $numero2,
        'resta' => $numero1 - $numero2,
        'multiplicacion' => $numero1 * $numero2,
        'division' => $numero1 / $numero2,
    };

    if($resultadoOperaciones < 1000)
    {
        $contador = 0;
        $_SESSION['contador'] += 1;
        if ($_SESSION['contador'] >= 5)
        {
            header('Location: ecuacion.php');
        }
        else
        {
            header("Location: calculos.php?resultado=" . $resultadoOperaciones);
        }
    }




}
