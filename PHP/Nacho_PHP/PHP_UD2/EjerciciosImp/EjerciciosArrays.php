<?php
	// Array asociativo de un videojuego
$videojuego = [
    "titulo" => "Elden Ring",
    "genero" => "RPG",
    "plataforma" => "PC",
    "valoracion" => 9.5
];

// Array asociativo de un jugador
$jugador = [
    "nombre" => "Alex",
    "nivel" => 35,
    "juegos" => ["Elden Ring", "God of War", "FIFA 22"],
    "tiempo_total" => 120  // en horas
];

$catalogo = [
    [
        "titulo" => "Elden Ring",
        "genero" => "RPG",
        "plataforma" => "PC",
        "valoracion" => 9.5
    ],
    [
        "titulo" => "FIFA 22",
        "genero" => "Deportes",
        "plataforma" => "PS5",
        "valoracion" => 8.0
    ],
    [
        "titulo" => "Minecraft",
        "genero" => "Aventura",
        "plataforma" => "PC",
        "valoracion" => 9.0
    ]
];

// Lista de jugadores
$jugadores = [
    [
        "nombre" => "Alex",
        "nivel" => 35,
        "juegos" => ["Elden Ring", "FIFA 22"],
        "tiempo_total" => 120
    ],
    [
        "nombre" => "Lucía",
        "nivel" => 42,
        "juegos" => ["Minecraft", "FIFA 22"],
        "tiempo_total" => 150
    ]
];

echo "$videojuego[titulo]" . " es del género " . "$videojuego[genero] " . "y está disponible en " . "$videojuego[plataforma] " . "con una valoración de " . "$videojuego[valoracion]"; 

echo "<br>";
echo "<br>";

foreach ($catalogo as $key => $value) {
    $catalogo2 = $catalogo[$key];
    foreach ($catalogo2 as $Clave => $value2) {
        if ($Clave === "titulo" || $Clave === "valoracion" || $Clave === "genero") {
            echo $value2;
            echo "<br>";
        };
    };
};
echo "<br>";
echo "<br>";

foreach ($jugadores as $key => $value) {
    $jugadores2 = $jugadores[$key];
    foreach ($jugadores2 as $Clave => $value) {
        if ($Clave === "juegos") {
            $jugadoresJuegos = $jugadores2[$Clave];
                echo count($jugadoresJuegos);
                echo "<br>";
        }
    }
}