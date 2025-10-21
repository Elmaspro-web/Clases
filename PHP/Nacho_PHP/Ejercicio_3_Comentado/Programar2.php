<?php
require_once './Autoload2.php';

/* L) Resulta que tienes un segundo hobby. Crea su clase asociada, heredará de la clase
abstracta. Necesitas contabilizar el tiempo dedicado a cada uno de ellos con métodos
que te permitan establecer un tiempo máximo y mínimo. Emplea alguna estructura que
te permita modularizarlo e implementarlo. */
class Programar2 extends Hobby
{

    protected string $lenguaje = "";
    protected string $tipo = "";
    protected string $mainIA = "";
    private $tMin;
    private $tMax;


    public function __construct($lenguaje = "ES", $tipo, $mainIA)
    {
        $this->lenguaje = $lenguaje;
        $this->tipo = $tipo;
        $this->mainIA = $mainIA;
    }

    public function tiempoMin()
    {
        $this->tMin = 1;
        echo "Tiempo mínimo recomendado: {$this->tMin}<br>";
    }

    // Implementación del método de la interfaz
    public function tiempoMax()
    {
        $this->tMax = 5;
        echo "Tiempo máximo recomendado: {$this->tMax}<br>";
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