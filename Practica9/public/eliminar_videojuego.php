<?php

require_once __DIR__ . '/../vendor/autoload.php';

use App\GestorVideojuegos;

    if (!isset($_GET['id'])) {
        die("Error: No se especificó el ID del videojuego");
    }

    $id = (int) $_GET['id'];

    try {
        $gestor = new GestorVideojuegos();
        $gestor->eliminar($id);

        header('Location: tabla_videojuegos.php');
        exit;

    } catch (PDOException $e) {
        die("Error al eliminar: " . $e->getMessage());
    }