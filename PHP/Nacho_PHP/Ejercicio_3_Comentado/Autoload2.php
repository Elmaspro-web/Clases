<?php

/* *F) Incluye un autoload que
dinamice la carga de clases de tu proyecto. */

function autoload($class_name): void
{
    $file = __DIR__ . '/' . $class_name . '.php';

    if(file_exists($file)){
        require_once $file;
    }
    // Si no existe, simplemente ignoramos en vez de lanzar fatal
}

spl_autoload_register('autoload');