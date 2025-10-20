<?php
include 'autoload.php';
require_once './Videojuegos.php';
require_once './Ayuda.php';
require_once './Programar.php';

$ayuda = new Ayuda();
define("N_JUEGOS", rand(1,10));
for ($i = 0; $i < N_JUEGOS; $i++)
{
    $juego = new Videojuegos($ayuda->nombreAlea(), $ayuda->nombreAlea(), $ayuda->nNpcsAlea());
    echo $juego->getNombre();
    echo "<br>";
    unset($juego);
    echo "<br>";
}

$prueba = new Videojuegos("Nacho", "pilin", 18);

echo $prueba->getPersonaje();
echo "<br>";
$prueba->setPersonaje(2);
echo $prueba->getPersonaje();
echo "<br>";

$pruebaUno = new Videojuegos(" :( ", " pilin ", 19);
echo $pruebaUno->getPersonaje();

$hobby = new Programar("hola", "hola", "hola");
echo $hobby->getLenguaje();

/* **G3) Genera un array global en el programa principal que almacene una ampliación de
los atributos de tu hobby (solamente claves). Después, agrega "mágicamente" dichos
nuevos atributos, modificando lo realizado en E, de modo que pueda verificarse que se
generan al vuelo/en memoria los nuevos atributos de tu hobby. */

$juegoUno = new Videojuegos("Pokemon ZA", "Entretenimiento", 12);

foreach ($GLOBALS['nuevosAtributos'] as $clave) {
    $juegoUno->$clave = $clave;
}

foreach ($GLOBALS['nuevosAtributos'] as $clave) {
    echo $clave . ": " . $juegoUno->$clave . "<br>";
}

/* ***LL) a ver que tal estoy Cooking*/
$cocinar = new class("Cocinar", "Culinaria", 7) extends Hobby implements Temporizador
{

    private $platoFavorito;
    public function tiempoMin() {
        echo "Tiempo mínimo recomendado: 0.5<br>";
    }

    public function tiempoMax() {
        echo "Tiempo máximo recomendado: 2<br>";
    }

    // Atributos y métodos propios
    public function setPlatoFavorito($plato) {
        $this->platoFavorito = $plato;
    }

    public function getPlatoFavorito() {
        return $this->platoFavorito;
    }

};

$cocinar->setPlatoFavorito("Macarrones con quesito");
$cocinar->tiempoMin();
$cocinar->tiempoMax();