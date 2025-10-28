<?php

class LibroDigital extends Libro
{
    protected string $tamanoLibro;
    protected string $formatoLibro;

    public function __construct($tamanoLibro,$formatoLibro,$nombre, $numeroPaginas, $nombreAutor, $numeroCapitulos, $precio)
    {
        parent::__construct($nombre, $numeroPaginas, $nombreAutor, $numeroCapitulos, $precio);
        $this->tamanoLibro = $tamanoLibro;
        $this->formatoLibro = $formatoLibro;
    }

    public function getTamanoLibro(): string
    {return $this->tamanoLibro;}
    public function setTamanoLibro(string $tamanoLibro): void
    {$this->tamanoLibro = $tamanoLibro;}
    public function getFormatoLibro(): string
    {return $this->formatoLibro;}
    public function setFormatoLibro(string $formatoLibro): void
    {$this->formatoLibro = $formatoLibro;}

    public function mostrarFormatoLibro()
    {
        return "El formato es: " . $this->formatoLibro;
    }
    private function calcularDescarga()
    {
        return $this->tamanoLibro * 0.1;
    }
    protected function infoProtegida() {
        return "La clase madre es Libro y yo soy la subclase LibroDigital";
    }
}