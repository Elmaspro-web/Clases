<?php

	$primo = 1;
	$es = TRUE;
	for ($i=2; $i <= $primo-1; $i++) { 
		if ($primo % $i == 0){
			$es = FALSE;
			break;
		}
	};
	
	$siguiente = $primo + 1;
	$sig = TRUE;
	for ($i=2; $i <= $siguiente - 1; $i++) { 
		if ($siguiente % $i == 0){
			$sig = FALSE;
			break;
		}
	};

	if ($primo <= 1) {
		if ($primo == 2 | $primo == 1) {
			echo "Este numero y el siguiente son primos";
		}
        elseif ($primo == 0) {
            echo "No es primo pero el siguiente es primo";
        }
		else {
			echo "Ninguno es primo";
		}
		
	}
	else{
		if ($es) {
			echo "Es primo";
		}
		else{
			echo "No es primo";
		}
		echo "<br>";
		if ($sig) {
			echo "Es primo";
		}
		else{
			echo "No es primo";
		}
	}