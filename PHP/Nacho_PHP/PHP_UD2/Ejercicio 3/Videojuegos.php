<?php
require_once './Hobby.php';
require_once './Acciones.php';
require_once './Temporizador.php';
class Videojuegos extends Hobby implements Acciones, Temporizador
{
    const SE_PUEDE_JUEGAR = "SI";
    static $personaje = 1;


    function __construct
    (
        protected string $nombre,
        protected string $tipo,
        protected int $edad_recomendada
    ){}

    function __destruct()
    {
        echo "Se ha eliminado el videojuego:" . $this->nombre;
    }

    public function tienpoMin()
    {
        return "Tu tiempo minimo son 5 mins";
    }

    public function tienpoMax()
    {
        return "Tu tiempo maximo son 3H";
    }

    public function iniciar()
    {
        return "Iniciando el Juego: $this->nombre que es un $this->tipo recomendado para un publico de $this->edad_recomendada años";
    }
    public function detener()
    {
        return "Deteniendo el juego: $this->nombre que es un $this->tipo recomendado para un publico de $this->edad_recomendada años";
    }
    public function actualizar($a)
    {
        return "Se esta actualizando $this->nombre";
    }

    public function getPersonaje()
    {
        return self::$personaje;
    }

    public function setPersonaje(int $personaje)
    {
        self::$personaje = $personaje;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre)
    {
        $this->nombre = $nombre;
    }

    public function getTipo(): string
    {
        return $this->tipo;
    }

    public function setTipo(string $tipo): void
    {
        $this->tipo = $tipo;
    }

    public function getEdadRecomendada(): int
    {
        return $this->edad_recomendada;
    }

    public function setEdadRecomendada(int $edad_recomendada): void
    {
        $this->edad_recomendada = $edad_recomendada;
    }

    public function enemigo()
    {
        echo $this->derrotado();
    }

    private function derrotado()
    {
        $numero = random_int(1,10);
        if ($numero > 5)
        {
            return "Lo has derrotado";
        }
        else
        {
            return "Te ha derrotado";
        }
    }

    protected function miHobby()
    {
        return "Mi hobby son los videojuegos";
    }

}