<?php
require_once __DIR__ . '/../vendor/autoload.php';

use App\GestorVideojuegos;

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

        $gestor = new GestorVideojuegos();
        $gestor->insertar($datos);

        $exito = true;

    } catch (PDOException $e) {
        $error = $e->getMessage();
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Agregar Videojuego</title>
</head>
<body>

    <h1>Agregar videojuego</h1>

    <?php if ($exito): ?>
        <p>
            Videojuego agregado correctamente
        </p>
    <?php endif; ?>

    <?php if ($error): ?>
        <p>
            Error: <?=$error?>
        </p>
    <?php endif; ?>

    <form method="POST">
            <label for="nombre">Nombre del videojuego:</label>
            <input type="text" id="nombre" name="nombre" required placeholder="Destiny 2"><br><br>

            <label for="tipo">Tipo/Género:</label>
            <input type="text" id="tipo" name="tipo" required placeholder="RPG"><br><br>

            <label for="dificultad">Dificultad (1-10):</label>
            <input type="number" id="dificultad" name="dificultad" min="1" max="10" required><br><br>

            <label for="plataforma">Plataforma:</label>
            <input type="text" id="plataforma" name="plataforma" required placeholder="PC"><br><br>

            <label><input type="checkbox" name="completado">¿Completado?</label><br><br>

            <label for="fecha_adquisicion">Fecha de adquisición:</label>
            <input type="date" id="fecha_adquisicion" name="fecha_adquisicion" required><br><br>

        <button type="submit">Guardar videojuego</button>
    </form><br>

    <div class="links">
        <a href="tabla_videojuegos.php">Ver tabla de videojuegos guardados</a>
    </div>
</div>
</body>
</html>