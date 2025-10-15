<?php

function factorial($a)
{
    if ($a < 0 )
    {
        throw new Exception("No se puede calcular el factorial de un numero negativo");
    }
    else
    {
        $fact = 1;
        for ($i = 2; $i <= $a; $i++)
            {
                $fact = $fact * $i;
            }
        echo $fact;
    }
};

try {
    $a = -3;
    factorial($a);
}catch (Exception $e)
{
    echo $e->getMessage();
}


