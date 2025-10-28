<?php

class Ayuda
{
    public function stringAleatorio() : string
    {
        $stringAleatorio = "";
        $nombreTamano = rand(1, 10);
        for ($i = 0; $i < $nombreTamano; $i++)
        {
            $stringAleatorio .= chr(rand(97, 122));
        }
        return $stringAleatorio;
    }
    public function intAleatorioGrande(): int
    {
        return rand(150, 500);
    }
    public function intAleatorioPequeno(): int
    {
        return rand(1, 20);
    }
    public function floatAleatorio(): float
    {
        $parteEntera = rand(10, 50);
        $parteDecimal = rand(0, 99);
        return $parteEntera + ($parteDecimal* 0.01);
    }
}