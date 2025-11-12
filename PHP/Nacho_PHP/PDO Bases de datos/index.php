<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario de Registro</title>
</head>
<body>
    <h2>Registro de Usuario</h2>
    <form action="procesar.php" method="POST">
        <label>Nombre:
            <input type="text" name="nombre" required>
        </label><br>
        <label>Apellido:
            <input type="text" name="apellido" required>
        </label><br>
        <label>Edad:
            <input type="number" name="edad" required>
        </label><br>
        <label>Contraseña:
            <input type="password" name="clave" required>
        </label><br>
        <label>Email:
            <input type="text" name="email" required>
        </label><br>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>