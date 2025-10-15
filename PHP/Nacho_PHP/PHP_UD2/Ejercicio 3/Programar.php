<?php
require_once './Hobby.php';
class Programar extends Hobby
{

    protected string $lenguaje = "";
    protected string $tipo = "";
    protected string $mainIA = "";



    public function __construct($lenguaje, $tipo, $mainIA)
    {
        $this->lenguaje = $lenguaje;
        $this->tipo = $tipo;
        $this->mainIA = $mainIA;
    }

    public function getLenguaje(): string
    {
        return $this->lenguaje;
    }

    public function setLenguaje(string $lenguaje): void
    {
        $this->lenguaje = $lenguaje;
    }

    public function getTipo(): string
    {
        return $this->tipo;
    }

    public function setTipo(string $tipo): void
    {
        $this->tipo = $tipo;
    }

    public function getMainIA(): string
    {
        return $this->mainIA;
    }

    public function setMainIA(string $mainIA): void
    {
        $this->mainIA = $mainIA;
    }

}