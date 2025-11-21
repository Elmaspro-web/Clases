<?php

    // 1. Cargar autoload
    require_once __DIR__ . '/../vendor/autoload.php';

    use App\GestorVideojuegos;

    // 2. Obtener los datos
    try {
        $gestor = new GestorVideojuegos();
        $videojuegos = $gestor->listar();
    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Tabla Videojuegos</title>
</head>
<body>
    <h1>Videojuegos</h1>

    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Dificultad</th>
                <th>Plataforma</th>
                <th>Completado</th>
                <th>Fecha Adquisición</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($videojuegos as $juego): ?>
                <tr>
                    <td>
                        <?= $juego['id'] ?>
                    </td>
                    <td>
                        <?= $juego['nombre'] ?>
                    </td>
                    <td>
                        <?= $juego['tipo'] ?>
                    </td>
                    <td>
                        <?= $juego['dificultad'] ?>
                    </td>
                    <td>
                        <?= $juego['plataforma'] ?>
                    </td>
                    <td>
                        <?= $juego['completado'] ? "Si" : "No" ?>
                    </td>
                    <td>
                        <?= $juego['fecha_adquisicion'] ?>
                    </td>
                    <td>
                        <a href="editar_videojuego.php?id=<?= $juego['id'] ?>">Editar</a>
                        <a href="eliminar_videojuego.php?id=<?= $juego['id'] ?>">Eliminar</a>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html>
