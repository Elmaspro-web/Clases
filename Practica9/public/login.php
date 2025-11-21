<?php
require_once __DIR__ . '/../vendor/autoload.php';

use App\GestorUsuarios;

$error = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST')
{

    $usuario = $_POST['usuario'] ?? '';
    $contrasena = $_POST['contrasena'] ?? '';

    if (empty($usuario) || empty($contrasena))
    {
        $error = "Todos los campos son obligatorios";
    }
    else
    {
        try {
            $gestor = new GestorUsuarios();
            if ($gestor->verificarLogin($usuario, $contrasena))
            {
                header('Location: agregar_videojuego.php');
            } else {
                $error = "Usuario no válido";
            }

        } catch (PDOException $e) {
            $error = "Error: " . $e->getMessage();
        }
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Login - Gestor de Videojuegos</title>
</head>
<body>
<div class="login-container">
    <h1>Inciar sesión</h1>

    <?php if ($error): ?>
        <div class="error"><?=$error?></div><br>
    <?php endif; ?>

    <form method="POST">
            <label for="usuario">Usuario:</label>
            <input type="text" id="usuario" name="usuario" required value="<?= htmlspecialchars($_POST['usuario'] ?? '') ?>">

            <label for="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" name="contrasena" required>

        <button type="submit">Iniciar Sesión</button>
    </form>
</div>
</body>
</html>