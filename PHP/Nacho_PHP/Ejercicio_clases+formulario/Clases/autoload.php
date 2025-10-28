<?php

function autoload($class_name): void
{
    $file = __DIR__ . '/' . $class_name . '.php';
    if(file_exists($file)){
        require_once $file;
    }
}

spl_autoload_register('autoload');