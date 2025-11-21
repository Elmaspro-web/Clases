<?php
namespace Tools;
use PDO;
use PDOException;

class Conexion
{
    static function getConexion(): PDO
    {
        try {
            $pdo = new PDO('mysql:host=localhost;dbname=formulariologinp9;port=3306;charset=utf8mb4', 'nacho', 'Prueba@1234');
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $pdo;
        } catch (PDOException $e) {
            throw new PDOException("Error de conexión: " . $e->getMessage());
        }

    }
}