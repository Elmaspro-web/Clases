<?php

interface Enviador
{
    public function enviar($mensaje);
}

interface Registrador
{
    public function registrar($mensaje);
}

class Notificador implements Enviador, Registrador
{
    public function enviar($mensaje)
    {
        return $mensaje;
    }
    public function registrar($mensaje)
    {
        return $mensaje;
    }
}

$notificador = new Notificador();
echo $notificador->registrar("Hola");