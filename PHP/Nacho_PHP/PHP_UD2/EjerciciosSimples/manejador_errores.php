<?php

function manejarErrores($errno, $str, $file, $line) {
	echo "Error Nº$errno: $str en el archivo $file en la linea $line";
    echo "<br>";
}

error_reporting(0);

set_error_handler("manejarErrores");

$a = $b;
$division = $a / $b;