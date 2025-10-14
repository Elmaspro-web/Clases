<?php
	echo rand(0, 100);
	echo("<br>");
	echo ('Casa');

	echo("<br>");
	
	$entero = 4;
	$numero = 4.5;
	$cadena = "Cadena";
	$bool = TRUE;

	/* Cambio de variable */

	$a = 5;
	echo gettype($a);
	echo("<br>");
	$a = "Hola";
	echo gettype($a);

	/* Asignación por copia */

	echo("<br>");
	$b = "Escarabajo";
	$a = $b;
	echo ($a);

	/* Lo mismo pero se guardan en el mismo espacio de memoria*/

	echo("<br>");
	$variable2 = 100;
	$variable1 = &$variable2;
	echo ($variable1);
	echo '<br>';

	/*tipos_numericos.php*/

	echo PHP_INT_SIZE.'<br>';
	echo PHP_INT_MIN.'<br>';
	echo PHP_INT_MAX.'<br>';

	$a = 0b100;
	$a = 0100;
	$a = 0x100;
	$a = 3/2;
	echo $a.'<br>';

	$b = 7.5;
	$a = (int)$b;
	echo $a.'<br>';

	$b = 7e2;
	$b = 7E2;

	/*Global_server.php*/
	echo "Ruta dentro de htdocs: ". $_SERVER['PHP_SELF'];
	echo "<br>";
	echo "Nombre del servidor: ". $_SERVER['SERVER_NAME'];
	echo "<br>";
	echo "Software del servidor: ". $_SERVER['SERVER_SOFTWARE'];
	echo "<br>";
	echo "Protocolo: ". $_SERVER['SERVER_PROTOCOL'];
	echo "<br>";
	echo "Método de la petición: ". $_SERVER['REQUEST_METHOD'];
	echo "<br>";

	/*Condicionales.php*/
	$var = 3;
	if ($var == 1) {
		echo "Es un uno";
	}
	elseif ($var == 2) {
		echo "Es un dos";
	}
	elseif ($var == 3) {
		echo "Es un tres";
	}
	else {
		echo "No es ni un uno, ni un dos, ni un tres";
	}
	echo "<br>";

	/*Bucles_anidados.php*/
	echo "Primer for anidado: <br>";
	for ($i = 0; $i < 3; $i++) {
		for ($j = 0; $j < 3; $j++) {
			echo "i: $i j: $j <br>";
			if ($j == 1) {
				break;
			}
		}
	}
	echo "Segundo for anidado: <br>";
	for ($i = 0; $i < 3; $i++) {
		for ($j = 0; $j < 3; $j++) {
			echo "i: $i j: $j <br>";
			if ($j == 1) {
				break 2;
			}
		}
	}

	/*Factorial*/
	$b = 0;
	$a = 1;
	for ($i = 1; $i <= $b; $i++) {
		$a = $a * $i;
	}
	echo "$a";
	echo "<br>";

	/*Funciones*/

	$arr1 = [
		0 => 444,
		1 => 222,
		3 => 333,
	];
	print_r($arr1);
	echo "<br>". "pos 0: ". $arr1[0]. "<br>";
	$arr1[0] = 555;
	print_r($arr1);
	echo "<br>";;
	$arr2 = array (
		"1111A" => "Ignacio Langarica Palacios",
		"1112A" => "Luis García Capilla",
		"1113A" => "Ernesto Sin Hache",
	);
	print_r($arr2);
	$arr2["1113A"] = "Ana Puertas tercero";
	echo "<br>";
	print_r($arr2);

	/*Recorrer bucles*/

	echo "<br>";
	foreach ($arr2 as $key => $value) {
		echo($key. "<br>");
	}
	