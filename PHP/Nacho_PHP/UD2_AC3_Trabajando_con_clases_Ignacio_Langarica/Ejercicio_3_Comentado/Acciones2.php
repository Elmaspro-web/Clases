<?php
/* C.2) La interfaz contendrá los métodos
iniciar(), detener(), actualizar(array $a)*/
interface Acciones2
{
    public function iniciar();
    public function detener();
    public function actualizar(array $a);
}