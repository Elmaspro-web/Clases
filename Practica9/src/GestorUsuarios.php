<?php
namespace App;

use Tools\Conexion;
use PDO;
use PDOException;

class GestorUsuarios
{

    public function verificarLogin(string $usuario, string $contrasena): bool
    {
        try {
            $pdo = Conexion::getConexion();

            $sql = "SELECT * FROM usuarios WHERE usuario = :usuario AND contrasena = :contrasena";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([
                'usuario' => $usuario,
                'contrasena' => $contrasena
            ]);

            $resultado = $stmt->fetch(PDO::FETCH_ASSOC);

            return $resultado !== false;

        } catch (PDOException $e) {
            throw new PDOException("Error en el login: " . $e->getMessage());
        }
    }
}