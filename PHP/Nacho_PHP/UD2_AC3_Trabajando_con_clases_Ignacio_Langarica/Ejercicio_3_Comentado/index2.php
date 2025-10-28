<?php
require_once 'Autoload2.php';

/* B) Instancia tres objetos de dicha clase
en un script individual. */

$juegoUno = new Videojuegos2("Pokemon ZA","RPG por turnos","1/10", "");
$juegoDos = new Videojuegos2("Elden Ring","RPG","10/10", "");
$juegoTres = new Videojuegos2("Borderlands 4","RPG","6/10", "");

echo $juegoUno->getDifficulty();
echo "<br>";
echo $juegoDos->getPlataforma();
echo "<br>";
echo $juegoTres->getNombre();
echo "<br>";
echo $juegoUno->iniciar();
echo "<br>";
echo $juegoDos->detener();
echo "<br>";
echo $juegoTres->actualizar(['difficulty' => '2/10']);
echo "<br>";
echo "<br>";
echo "<hr>";

/* D) Recupera la práctica 2 y crea una clase
de ayuda que te devuelva los valores
aleatorios adecuados para cada tipo de
dato que componen los atributos de tu
clase/entidad.*/

$ayuda = new Ayuda2();

$juegoCuatro = new Videojuegos2($ayuda->nombreAleatorio(), $ayuda->nombreAleatorio(), $ayuda->numeroAleatorio()."/10");
echo $juegoCuatro->getNombre();
echo "<br>";
echo $juegoCuatro->getType();
echo "<br>";
echo $juegoCuatro->getDifficulty();
echo "<br>";
echo "<hr>";

/* E) Genera N actividades distintas de tu
hobby instanciando N objetos de tu clase de
forma aleatoria en un programa principal,
usando la clase creada en D), donde N es una
constante PHP definida en el script principal.*/

echo "<br>";
define("ALEATORIO", rand(1,10));
echo "La lista es de: " . ALEATORIO . " Juegos";
echo "<br>";
for ($i = 0; $i < ALEATORIO; $i++)
{

    echo "<br>";
    echo "Juego " . $i+1;
    echo "<br>";
    $juegoAleatorio = new Videojuegos2($ayuda->nombreAleatorio(), $ayuda->nombreAleatorio(),$ayuda->numeroAleatorio()."/10");
    echo "Nombre : " . $juegoAleatorio->getNombre();
    echo "<br>";
    echo "Tipo: " . $juegoAleatorio->getType();
    echo "<br>";
    echo "Dificultad: " . $juegoAleatorio->getDifficulty();
    echo "<br>";

}
echo "<hr>";
echo "<br>";

/* **G) Genera un array global en el programa principal que
almacene una ampliación de los atributos de tu hobby (solamente claves).
Después, agrega mágicamente dichos nuevos atributos, modificando
lo realizado en E, de modo que pueda verificarse que se
generan al vuelo/en memoria los nuevos atributos de tu hobby.*/

$juegoCinco = new Videojuegos2("Destiny 2", "RPG", 16);
$nuevosAtributos = ['saga', 'añosSalida'];
$GLOBALS['valores'] = ['si', '5 años'];
foreach ($GLOBALS['nuevosAtributos'] as $index => $clave) {
    $juegoCinco->$clave = $GLOBALS['valores'][$index];
}

foreach ($GLOBALS['nuevosAtributos'] as $clave) {
    echo $clave . ": " . $juegoCinco->$clave . "<br>";
}

echo $juegoCinco->getNombre();
echo "<br>";
unset($juegoCinco);
echo "<br>";
echo "<br>";
echo "<hr>";

/* J) Genera una constante en tu clase (con sentido) y un atributo
estático de tipo int. Comprueba que es estático con dos referencias
que manipulen y muestren el valor de dicha variable estática (referencia
desde clase y/o desde un met0do estático)*/

$prueba = new Videojuegos2("Nacho", "pilin", 18);
echo "Probar un parametro estatico: <br>";
echo $prueba->getPersonaje();
echo "<br>";
$prueba->setPersonaje(2);
echo $prueba->getPersonaje();
echo "<br>";
$pruebaUno = new Videojuegos2(" :( ", " pilin ", 19);
echo $pruebaUno->getPersonaje();
echo "<br>";
unset($pruebaUno);
echo "<br>";
unset($prueba);
echo "<br>";
echo "<br>";
echo "<hr>";

/* ***LL) Crea un nuevo hobby, el tercero, mediante una clase anónima, sin perder la
herencia, interfaces y estructuras esperadas. Es decir, instancia un objeto asignándole
una clase que contenga al vuelo todas las estructuras. */

$cocinar = new class("Cocinar", "Culinaria", "a") extends Hobby2 implements Temporizador2 {

    private string $platoFavorito;

    // Implementación de la interfaz
    public function tiempoMin() {
        echo "Tiempo mínimo recomendado: 0.5 horas<br>";
    }

    public function tiempoMax() {
        echo "Tiempo máximo recomendado: 2 horas<br>";
    }

    // Métodos propios
    public function setPlatoFavorito(string $plato): void {
        $this->platoFavorito = $plato;
    }

    public function getPlatoFavorito(): string {
        return $this->platoFavorito;
    }

    public function setNombre(string $nombre): void
    {$this->nombre = $nombre;}
    public function getNombre(): string
    {return $this->nombre;}
};

$cocinar->setPlatoFavorito("Macarrones con quesito");
echo $cocinar->getPlatoFavorito();
echo " es mi plato favorito";
echo "<br>";
$cocinar->tiempoMin();
$cocinar->tiempoMax();
echo "<br>";
echo "<hr>";