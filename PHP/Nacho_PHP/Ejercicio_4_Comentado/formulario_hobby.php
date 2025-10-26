<!-- 10) Serializa el objeto tras recibir la petición el script destino
(https://www.php.net/manual/es/language.oop5.serialization.php). Haz las
modificaciones necesarias para que al regresar al script origen se des-serialice el objeto
y lo recuperes e imprimas sus valores atributo a atributo. -->

<?php

require_once '../Ejercicio_3_Comentado/Videojuegos2.php';

if (isset($_GET['objeto'])) {
    $videojuego = unserialize(urldecode($_GET['objeto']));

    echo "<h1>Datos del objeto Videojuego:</h1>";
    echo "Nombre: " . $videojuego->getNombre() . "<br>";
    echo "Tipo: " . $videojuego->getType() . "<br>";
    echo "Dificultad: " . $videojuego->getDifficulty() . "<br>";
    echo "Horas totales: " . $videojuego->getHorasTotales() . "<br>";
    echo "Fotografía: " . $videojuego->__get('fotografía') . "<br><br><hr>";
}
?>

<!-- 1) Crea un formulario de tu hobby:
tantos campos como atributos del hobby, con
método GET. -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Formulario del Hobby</title>
</head>
<body>

<!-- /* 2) Incluye para ello algún parámetro
de control que indique que el formulario
se ha enviado, independiente del resto de campos */ -->

<!-- 4) Modifica 3) para que el mensaje se devuelva
al formulario principal (se imprimirá
centrado justo encima del formulario) -->

<!-- Se asegura de que la información $_GET del
header del archivo destino exista para saber que ha llegado -->

<?php
    if (isset($_GET['mensajeMostrar'])) {
        echo "<p style='text-align: center'> Formulario recibido </p><hr>";
        echo "<p style='text-align:center'>" . $_GET['mensajeMostrar'] . "</p><hr>";
    }
?>
<h1>Formulario</h1>
<form action="destino.php" method="post" enctype="multipart/form-data">
    <label>Nombre:
        <input type="text" name="nombre" value="<?php if(!empty($nombre)){ echo $nombre;}?>">
    </label>
    <br>
    <br>

    <label>Tipo:
        <input type="text" name="tipo" value="<?php if(!empty($type)){ echo $type;}?>">
    </label>
    <br>
    <br>
    <!-- Lo aprendimos con MªCristina -->
    <label>Dificultad (0-10):
        <input type="number" name="dificultad" min="0" max="10" oninput="if(this.value.length > 2) this.value = this.value.slice(0,2);" value="<?php if(!empty($difficulty)){ echo $difficulty;}?>">
    </label>
    <br>
    <br>

    <label>Horas para completar el juego:
        <input type="number" name="horasMax" min="0" max="300" oninput="if(this.value.length > 3) this.value = this.value.slice(0,3);" value="<?php if(!empty($horas)){ echo $horas;}?>">
    </label>
    <br>
    <br>
    <label>Foto del Hobby:
        <input type="file" name="pdf_hobby" accept=".pdf">
    </label>
    <br>
    <br>
    <input type="hidden" name="escondido" value="enviado">
    <input type="submit" name="Enviar">
</form>
</body>
</html>