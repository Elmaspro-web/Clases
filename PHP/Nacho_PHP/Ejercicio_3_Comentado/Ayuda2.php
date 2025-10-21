<?php
/* D) Recupera la práctica 2 y crea una clase
de ayuda que te devuelva los valores
aleatorios adecuados para cada tipo de
dato que componen los atributos de tu
clase/entidad.*/
class Ayuda2
{
    public function nombreAleatorio() : string
    {
        $nombreAlea = "";
        $nombreTamano = rand(1, 10);
        for ($i = 0; $i < $nombreTamano; $i++)
        {
            $nombreAlea .= chr(rand(97, 122));
        }
        return $nombreAlea;
    }
    public function numeroAleatorio(): int
    {
        return rand(1, 10);
    }
}