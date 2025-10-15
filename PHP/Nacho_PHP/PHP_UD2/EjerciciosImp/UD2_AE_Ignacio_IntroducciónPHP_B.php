<?php
	define("CANTIDAD", 3);
    $juegos = crearArray();
    print_r($juegos);
	function crearArray() {
        $arrayAlaeatorio = [];
        for ($i = 0; $i < CANTIDAD; $i++) {
            $arrayAlaeatorio[$i] = [
                "nombre" => nombreAlea(),
                "npcs" => nNpcsAlea(),
                "precio" => precioAlea(),
                "f_publicacion" => fechaAlea(),
            ];
        }
        return $arrayAlaeatorio;
    }

    function nombreAlea () {

        $nombreAleatorio = " ";
        $nombreTamaño  = rand(1,10);

        for ($i = 0; $i < $nombreTamaño; $i++) {
            $nombreAleatorio .= chr(rand(97, 122));
        }

        return $nombreAleatorio;

    }

    function nNpcsAlea () {

        $nNpcsAleatorio = rand(100, 99999999);

        return $nNpcsAleatorio;

    }

    function precioAlea (){

        $precioAleatorioEntero = rand(1, 999);
        $precioAleatorioDecimal = rand(1, 99999);
        $precioAleatorio = $precioAleatorioEntero + ($precioAleatorioDecimal*0.00001);

        return $precioAleatorio;

    }

    function fechaAlea() {

        $mesAlea = rand(1, 12);

        if ($mesAlea == 2){
            $diaAlea = rand(1, 28);
        }
        elseif ($mesAlea%2 == 0) {
            $diaAlea = rand(1,30);
        }
        else {
            $diaAlea = rand(1,31);
        }

        return $diaAlea . "/" . $mesAlea . "/2025";
    }
