<?php
/* C) Crea una superclase abstracta
denominada Hobby de la que herede tu entidad y que
implemente la interfaz Acciones.
C.1) Hobby definirá los métodos
setNombre(string $nombre), getNombre(): string*/
abstract class Hobby2
{
        abstract public function setNombre(string $nombre);
        abstract public function getNombre() :string;
}