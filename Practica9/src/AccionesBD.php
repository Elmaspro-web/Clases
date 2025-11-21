<?php
namespace App;

interface AccionesBD
{
    function insertar(array $datos);
    function eliminar(int $id);
    function actualizar(int $id, array $datos);
    function listar() : array;
}