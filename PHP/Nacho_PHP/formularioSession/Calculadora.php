<?php

class Calculadora
{
    private static $instancias = [];
    public static function Singelton()
    {
        $class = static::class;
        if (!isset(self::$instancias[$class]))
        {
            self::$instancias[$class] = new static();
        }

        return self::$instancias[$class];

    }

   public static function sumar($a, $b)
   {
       return $a + $b;
   }

   public static function restar($a, $b)
   {
       return $a - $b;
   }

   public static function multiplicar($a, $b)
   {
       return $a * $b;
   }

   public static function dividir($a, $b)
   {
       return $a / $b;
   }

}