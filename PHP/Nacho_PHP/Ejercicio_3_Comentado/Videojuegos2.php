<?php
/* A) Genera una clase que represente
la entidad de tu hobby favorito incluyendo todos
los atributos, con sus getters y setters. */

require_once 'Autoload2.php';

#[AllowDynamicProperties]
class Videojuegos2 extends Hobby2 implements Acciones2, Temporizador2
{

    /* J */
    const SE_PUEDE_JUEGAR = "SI";
    static $personaje = 1;
    protected string $type;
    protected string $difficulty;
    protected int $horasTotales;
    const PLATAFORMA = "NachoStation5";

    /* Array del G */
    protected $data = array();

    /* H) Crea el constructor y destructor de tu
    hobby e implementa el mét0do mágico __toString() */

    public function __construct($nombre,$type, $difficulty, $horasTotales)
    {
        $this->nombre = $nombre;
        $this->type = $type;
        $this->difficulty = $difficulty;
        $this->horasTotales = $horasTotales;
    }

    function __destruct()
    {
        echo "Se ha eliminado el videojuego: " . $this->nombre;
    }
    public function __toString()
    {
        return "Este juego " . $this->nombre . " es de tipo " . $this->type . " con una dificultad de: " . $this->difficulty;
    }

    /* I */
    public function getPersonaje(): int
    {return self::$personaje;}

    public function setPersonaje(int $personaje): void
    {self::$personaje = $personaje;}

    public function setNombre(string $nombre): void
    {$this->nombre = $nombre;}
    public function getNombre(): string
    {return $this->nombre;}
    public function getType() : string
    {return $this->type;}
    public function setType($type): void
    {$this->type = $type;}
    public function getDifficulty() : string
    {return "$this->difficulty/10";}
    public function setDifficulty($difficulty): void
    {$this->difficulty = $difficulty;}
    public function getPlataforma() : string
    {return self::PLATAFORMA;}
    public function getHorasTotales(): int
    {return $this->horasTotales;}
    public function setHorasTotales(int $horasTotales): void
    {$this->horasTotales = $horasTotales;}

    /* L */
    public function tiempoMin()
    {return "Tu tiempo minimo son 5 mins";}
    public function tiempoMax()
    {return "Tu tiempo maximo son 3H";}

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

    /* Métodos mágicos del G*/
    public function __get($clave)
    {return $this->data[$clave];}
    public function __set($clave, $valor)
    {$this->data[$clave] = $valor;}


    /* I) Crea métodos public, private y protected en tu
    hobby que tengan sentido. Para ello
    genera una subclase de la clase si es necesario.*/
    public function enemigo()
    {
        echo $this->derrotado();
    }

    private function derrotado()
    {
        $numero = random_int(1,10);
        if ($numero > 5)
        {return "Lo has derrotado";}
        else
        {return "Te ha derrotado";}
    }

    protected function miHobby()
    {
        return "Mi hobby son los videojuegos";
    }
}