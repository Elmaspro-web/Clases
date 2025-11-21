<?php
require_once __DIR__ . '/../vendor/autoload.php';

use App\GestorVideojuegos;

if (!isset($_GET['id'])) {
    die("Error: No se especificó el ID del videojuego");
}

$id = (int) $_GET['id'];
$gestor = new GestorVideojuegos();
$error = null;
$exito = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $datos = [
            'nombre' => $_POST['nombre'],
            'tipo' => $_POST['tipo'],
            'dificultad' => (int) $_POST['dificultad'],
            'plataforma' => $_POST['plataforma'],
            'completado' => isset($_POST['completado']) ? 1 : 0,
            'fecha_adquisicion' => $_POST['fecha_adquisicion']
        ];

        $gestor->actualizar($id, $datos);

        header('Location: tabla_videojuegos.php');
        exit;

    } catch (PDOException $e) {
        $error = $e->getMessage();
    }
}

// Obtener datos actuales del videojuego
try {
    $videojuegos = $gestor->listar();

    $juego = null;
    foreach ($videojuegos as $v) {
        if ($v['id'] == $id) {
            $juego = $v;
            break;
        }
    }

    if (!$juego) {
        die("Error: Videojuego no encontrado");
    }
} catch (PDOException $e) {
    die("Error al obtener datos: " . $e->getMessage());
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Editar Videojuego</title>
</head>
<body>
<h1>Editar Videojuego: <?=$juego['nombre']?></h1>

<form method="POST">
    <label>Nombre:
        <input type="text" name="nombre" value="<?=$juego['nombre']?>" required>
    </label><br><br>

    <label>Tipo:
        <input type="text" name="tipo" value="<?=$juego['tipo']?>" required>
    </label><br><br>

    <label>Dificultad (1-10):
        <input type="number" name="dificultad" min="1" max="10" value="<?=$juego['dificultad']?>" required>
    </label><br><br>

    <label>Plataforma:
        <input type="text" name="plataforma" value="<?=$juego['plataforma']?>" required>
    </label><br><br>

    <label>Completado:
        <input type="checkbox" name="completado" <?=$juego['completado'] ? 'checked' : '' ?>>
    </label><br><br>

    <label>Fecha de adquisición:
        <input type="date" name="fecha_adquisicion" value="<?=$juego['fecha_adquisicion']?>" required>
    </label><br><br>

    <button type="submit">Guardar Cambios</button>
    <a href="tabla_videojuegos.php">ancelar</a>
</form>
</body>
</html>