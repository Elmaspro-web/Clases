<?php

require_once 'autoload.php';

class Libro extends Hobby implements Acciones
{
    /* private $idLibro; */

    /* Atributos de Libro */
    protected int $numeroPaginas;
    protected string $nombreAutor;
    protected int $numeroCapitulos;
    protected float $precio;
    CONST IVA = 21;
    public static int $librosCreados = 0;

    /* Constructor */
    public function __construct($nombre, $numeroPaginas, $nombreAutor, $numeroCapitulos, $precio)
    {
        $this->nombre = $nombre;
        $this->numeroPaginas = $numeroPaginas;
        $this->nombreAutor = $nombreAutor;
        $this->numeroCapitulos = $numeroCapitulos;
        $this->precio = $precio;
        self::$librosCreados++;
    }

    /* Destructor */

    public function __destruct()
    {
        echo "Se ha eliminado el juego: " . $this->getNombre();
        echo "<br>";
    }

    public static function mostrarCantidadLibros() {
        return "Libros creados: " . self::$librosCreados;
    }

    /* Getters y Setters */
    public function setNombre($nombre): void
    {$this->nombre = $nombre;}
    public function getNombre(): string
    {return $this->nombre;}
    public function getNumeroPaginas(): int
    {return $this->numeroPaginas;}
    public function setNumeroPaginas($numeroPaginas): void
    {$this->numeroPaginas = $numeroPaginas;}
    public function getNombreAutor(): string
    {return $this->nombreAutor;}
    public function setNombreAutor($nombreAutor): void
    {$this->nombreAutor = $nombreAutor;}
    public function getNumeroCapitulos(): int
    {return $this->numeroCapitulos;}
    public function setNumeroCapitulos($numeroCapitulos): void
    {$this->numeroCapitulos = $numeroCapitulos;}
    public function getPrecio(): float
    {return $this->precio;}
    public function setPrecio($precio): void
    {$this->precio = $precio;}

    public function iniciar(): string
    {return "Se ha iniciado el libro: " . $this->nombre . " contiene " . $this->numeroPaginas . " y " . $this->numeroCapitulos . " capítulos.";}

    public function detener(): string
    {return "Se ha detenido el libro: " . $this->nombre;}

    public function actualizar(array $a): string
    {
        $mensajes = [];
        if(isset($a['nombre']))
        {
            $this->nombre = $a['nombre'];
            $mensajes[] = "Se ha actualizado el nombre del libro: " . $this->nombre;
        }
        if(isset($a['numeroPaginas']))
        {
            $this->numeroPaginas = $a['numeroPaginas'];
            $mensajes[] = "Se han actualizado las páginas del libro " . $this->getNombre() . " a ". $this->numeroPaginas;
        }
        if (isset($a['numeroCapitulos']))
        {
            $this->numeroCapitulos = $a['numeroCapitulos'];
            $mensajes[] = "Se han actualizado los capitulos del libro " . $this->nombre . " a " . $this->numeroCapitulos;
        }
        if (isset($a['precio']))
        {
            $this->precio = (float)$a['precio'];
            $mensajes[] = "Se ha actualizado el precio del libro a " . $this->precio;
        }
        return implode(" - - - ",$mensajes);
    }

    public function __toString()
    {
        $texto = "Nombre: " . $this->nombre . "<br>";
        $texto .= "Autor: " . $this->nombreAutor . "<br>";
        $texto .= "Número de páginas: " . $this->numeroPaginas . "<br>";
        $texto .= "Número de capítulos: " . $this->numeroCapitulos . "<br>";
        $texto .= "Precio: $" . $this->precio . "<br>";

        /* .= agregar al final de la variable */

        if(isset($this->Editorial)) $texto .= "Editorial: " . $this->Editorial . "<br>";

        if(isset($this->anioPublicacion)) $texto .= "Año de publicación: " . $this->anioPublicacion . "<br>";

        return $texto;
    }
}