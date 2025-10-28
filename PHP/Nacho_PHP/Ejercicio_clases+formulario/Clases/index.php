<?php

require_once 'autoload.php';

/* Instanciar 3 nuevos libros de la clase Libro */
$libroUno = new Libro("Harry Potter y la piedra Filosofal", 490, "JK Rowling", 12, 49.95);
$libroDos = new Libro("La Sangre del Olimpo", 612, "Rick Riordan", 16, 29.95);
$libroTres = new Libro("El Principe de la Niebla", 227, "Carlos Ruiz Zafón", 8, 16.95);

echo $libroUno->getNombre();
echo "<br>";
echo $libroDos->getNombre();
echo "<br>";
echo $libroTres->getNombre();
echo "<br>";echo "<br>";

/* Probar el método actualizar */
echo $libroUno->actualizar([
    'nombre' => "Harry Potter",
    'precio' => 20.10
]);
echo "<br>";echo "<br>";
echo $libroUno->getNombre();
echo "<br>";echo "<hr>";


$randomizar = new Ayuda();

$libroCuatro = new Libro($randomizar->stringAleatorio(), $randomizar->intAleatorioGrande(), $randomizar->stringAleatorio(), $randomizar->intAleatorioPequeno(), $randomizar->floatAleatorio());
echo "Nombre del libro: " . $libroCuatro->getNombre();
echo "<br>";
echo "Numero de capitulos: " . $libroCuatro->getNumeroPaginas();
echo "<br>";
echo "Nombre del autor: " . $libroCuatro->getNombreAutor();
echo "<br>";
echo "Numero de capitulos: " . $libroCuatro->getNumeroCapitulos();
echo "<br>";
echo "Precio: " . $libroCuatro->getPrecio();
echo "<br>";echo "<hr>";


define("NUMERO", rand(1,5));

$nuevosAtributosEjercicioGE = ["Editorial", 'anioPublicacion'];

for ($i = 0; $i < NUMERO; $i++)
{
    $libroAleatorio = new Libro($randomizar->stringAleatorio(), $randomizar->intAleatorioGrande(), $randomizar->stringAleatorio(), $randomizar->intAleatorioPequeno(), $randomizar->floatAleatorio());

    foreach ($nuevosAtributosEjercicioGE as $clave)
    {
        $libroAleatorio->$clave = $randomizar->stringAleatorio();
    }

    echo "Nombre del libro: " . $i+1 . " " . $libroAleatorio->getNombre();
    echo "<br>";
    echo "Editorial: " . $libroAleatorio->Editorial;
    echo "<br>";
    echo "Año de publicación: " . $libroAleatorio->anioPublicacion;
    echo "<br>";
    unset($libroAleatorio);
    echo "<hr>";
}

/* Array Global al que se le añaden en el "vuelo" datos */

$libroCinco = new Libro("Gachiakuta", 100, "Nacho",5,8.95);

$nuevosAtributos = ["Editorial", 'anioPublicacion'];

foreach ($nuevosAtributos as $clave)
{
    $libroCinco->$clave = $randomizar->stringAleatorio();
}

echo $libroCinco;
echo "<br>";echo "<hr>";

echo "IVA " . Libro::IVA . "%";
echo "<br>";
echo Libro::mostrarCantidadLibros();
echo "<br>";
echo Libro::$librosCreados;
echo "<br>";echo "<hr>";

echo 'Se eliminan todos los $libro antes creados';
echo "<br>";
echo "<br>";