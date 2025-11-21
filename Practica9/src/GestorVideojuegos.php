<?php
namespace App;

use Tools\Conexion;
use PDO;
use PDOException;

class GestorVideojuegos implements AccionesBD
{

    public function insertar(array $datos): void
    {
        try {
            // 1. Obtener conexión
            $pdo = Conexion::getConexion();

            // 2. Preparar la consulta INSERT
            $sql = "INSERT INTO videojuegos (nombre, tipo, dificultad, plataforma, completado, fecha_adquisicion) 
                    VALUES (:nombre, :tipo, :dificultad, :plataforma, :completado, :fecha_adquisicion)";
            $stmt = $pdo->prepare($sql);

            // 3. Ejecutar con los datos
            $stmt->execute($datos);

        } catch (PDOException $e) {
            // 4. Manejar errores
            throw new PDOException("Error al insertar videojuego: " . $e->getMessage());
        }
    }

    public function eliminar(int $id): void
    {
        try {
            $pdo = Conexion::getConexion();

            $sql = "DELETE FROM videojuegos 
                    WHERE id = :id";
            $stmt = $pdo->prepare($sql);

            $stmt->execute(['id' => $id]);
        }catch(PDOException $e){
            throw new PDOException("Error al eliminar videojuego: " . $e->getMessage());
        }
    }

    public function actualizar(int $id, array $datos): void
    {
        try{
            $pdo = Conexion::getConexion();

            $sql = "UPDATE videojuegos 
                SET nombre = :nombre, tipo = :tipo, dificultad = :dificultad, plataforma = :plataforma, completado = :completado, fecha_adquisicion = :fecha_adquisicion 
                WHERE id = :id";
            $stmt = $pdo->prepare($sql);

            // Hay que combinar $datos y $id en un solo array
            $stmt->execute(array_merge($datos, ['id' => $id]));
        }catch (PDOException $e) {
            throw new PDOException("Error al actualizar videojuego: " . $e->getMessage());
        }
    }

    public function listar(): array
    {
        try {

            $pdo = Conexion::getConexion();
            $sql = "SELECT * FROM videojuegos";

            $stmt = $pdo->query($sql);

            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }catch(PDOException $e){
            throw new PDOException("Error al listar videojuegos: " . $e->getMessage());
        }
    }
}