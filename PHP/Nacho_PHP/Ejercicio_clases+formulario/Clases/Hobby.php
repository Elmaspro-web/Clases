<?php

abstract class Hobby
{
    /* Define los métodos getNombre y setNombre para obligar
    a sus clases hijas a que tengan estos getters y setters 100% */
    abstract public function getNombre():String;
    abstract public function setNombre(string $nombreLibro);
}