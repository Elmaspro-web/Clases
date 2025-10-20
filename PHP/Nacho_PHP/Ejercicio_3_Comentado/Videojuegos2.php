<?php
/* A) Genera una clase que represente
la entidad de tu hobby favorito incluyendo todos
los atributos, con sus getters y setters. */

require_once './Hobby2.php';
require_once './Acciones2.php';
#[AllowDynamicProperties]
class Videojuegos2 extends Hobby2 implements Acciones2
{
    protected string $type;
    protected string $difficulty;
    CONST PLATAFORMA = "NachoStation5";

    public function __construct($nombre,$type, $difficulty)
    {
        $this->nombre = $nombre;
        $this->type = $type;
        $this->difficulty = $difficulty;
    }
    public function setNombre(string $nombre): void
    {$this->nombre = $nombre;}
    public function getNombre(): string
    {return $this->nombre;}
    public function getType() : string
    {return $this->type;}
    public function setType($type): void
    {$this->type = $type;}
    public function getDifficulty() : string
    {return $this->difficulty;}
    public function setDifficulty($difficulty): void
    {$this->difficulty = $difficulty;}
    public function getPlataforma() : string
    {return self::PLATAFORMA;}

    /* C.3) Implementa los métodos de la
    interfaz en la subclase, mostrando mensajes de
    texto descriptivos. Ej: Iniciando lectura del
    libro $titulo de $n páginas... */
    public function iniciar() : string { return "Iniciando el Juego: $this->nombre que es un $this->type con una dificultad de $this->difficulty";}
    public function detener() : string { return "Deteniendo el juego: $this->nombre";}
    public function actualizar(array $a) : string
    {
        $mensajes = [];
        if(isset($a['nombre'])){
            $this->nombre = $a['nombre'];
            $mensajes[] = "Nombre actualizado a {$this->nombre}";
        }
        if(isset($a['type'])){
            $this->type = $a['type'];
            $mensajes[] = "Tipo actualizado a {$this->type}";
        }
        if(isset($a['difficulty'])){
            $this->difficulty = $a['difficulty'];
            $mensajes[] = "Dificultad actualizada a {$this->difficulty}";
        }
        if(empty($mensajes)){
            return "No se realizaron cambios en el juego {$this->nombre}";
        }
        return implode("; ", $mensajes);
    }
}