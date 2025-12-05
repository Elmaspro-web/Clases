<?php

// Parte 1

if (!file_exists("./abecedarioFichero"))
{
    mkdir("./abecedarioFichero");
}

$abecedario = range('A', 'Z');

$abecedario_archivo = fopen("./abecedarioFichero/abecedario.txt", "w");

for ($i = 0; $i < count($abecedario); $i++)
{
    if ($i % 5 == 0 && $i >= 5)
    {
        fwrite($abecedario_archivo, PHP_EOL);
    }
    fwrite($abecedario_archivo, $abecedario[$i] . " ");
}

fclose($abecedario_archivo);

// Parte 2.1

if (!file_exists("./letras"))
{
    mkdir("./letras");
}

$abecedario_archivo = fopen("./abecedarioFichero/abecedario.txt", "r");
for ($j = 0; $j < ceil(count($abecedario)/5); $j++)
{

    fscanf($abecedario_archivo, "%s%s%s%s%s", $l1, $l2, $l3, $l4, $l5);

    $letras = [$l1, $l2, $l3, $l4, $l5];

    for ($k = 0; $k < count($letras); $k++)
    {
        $letraArchivo = fopen("./letras/" . $letras[$k] . ".txt", "w");
        fwrite($letraArchivo, $letras[$k]);
        fclose($letraArchivo);
    }
}

// Parte 2.2

if (!file_exists("./copiarLetras")) {
    mkdir("./copiarLetras");
}

rewind($abecedario_archivo);

for ($j = 0; $j < ceil(count($abecedario) / 5); $j++)
{
    fscanf($abecedario_archivo, "%s%s%s%s%s", $l1, $l2, $l3, $l4, $l5);

    $letras = [$l1, $l2, $l3, $l4, $l5];

    for ($k = 0; $k < count($letras); $k++)
    {
            if (file_exists("./letras/" . $letras[$k] . ".txt"))
            {
                copy("./letras/" . $letras[$k] . ".txt", "./copiarLetras/" . $letras[$k] . ".txt");
            }
    }
}

fclose($abecedario_archivo);