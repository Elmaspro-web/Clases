<?php
require_once ("./Calculadora.php");
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST')
{

    $numero1 = $_POST['numeroUno'];
    $numero2 = $_POST['numeroDos'];
    $operaciones = $_POST['operaciones'];
    $resultado = true;
    $calculadora = Calculadora::Singelton();

    $resultadoOperaciones = match ($operaciones) {
        'suma' => $calculadora->sumar($numero1, $numero2),
        'resta' => $calculadora->restar($numero1, $numero2),
        'multiplicacion' => $calculadora->multiplicar($numero1, $numero2),
        'division' => $calculadora->division($numero1, $numero2),
    };

    if($resultadoOperaciones < 1000)
    {
        $contador = 0;
        $_SESSION['contador'] += 1;
        if ($_SESSION['contador'] >= 5)
        {
            $_SESSION['contador'] = 0;
            header("Location: ecuacion.php?resultado=" . $resultadoOperaciones);
        }
        else
        {
            header("Location: calculos.php?resultado=" . $resultadoOperaciones);
        }
    }
    else
    {
        header("Location: calculos.php?resultado=" . $resultadoOperaciones);
    }

}
