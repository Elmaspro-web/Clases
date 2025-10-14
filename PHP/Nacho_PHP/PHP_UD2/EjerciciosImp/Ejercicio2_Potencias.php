<?php 

function potencias($base, $exponente = 2) {
	$p = 1;
		for ($i=1; $i <= $exponente ; $i++) { 
			$p = $p * $base;
		}
		echo "$p <br>";

}

potencias(2, 3);

potencias(5);

potencias(5, 6);


