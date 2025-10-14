<?php

function dividir($a, $b)
{
    if ($b == 0)
    {
            throw new Exception("No se puede dividir entre cero");
    }
    echo $a / $b;
}

function suma($a, $b)
{
   if ($b == 0)
   {
       throw new Exception("No se puede sumar entre cero");
   }
}

try
{
    dividir(10, 0);
}catch (Exception $paco)
{
    echo $paco->getMessage()."<br>";
}

try
{
    suma(10, 0);
}catch (Exception $paco)
{
    echo $paco->getMessage()."<br>" ;
}