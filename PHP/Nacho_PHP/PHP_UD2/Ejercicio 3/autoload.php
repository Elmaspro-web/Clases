<?php


function autoload($class_name) {
    include 'Ejercicio 3/' . $class_name . '.php';
}

spl_autoload_register('autoload');