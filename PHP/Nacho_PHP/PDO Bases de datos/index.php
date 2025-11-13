<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario de Registro</title>
</head>
<body>
<?php
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    if (isset($_GET['autentificado'])) {
        if ($_GET['autentificado'] === 'true') {
            echo "Existe el usuario";
        } elseif ($_GET['autentificado'] === 'false') {
            echo "No existe el usuario";
        }
    }
}
?>
    <h2>Registro de Usuario</h2>
    <form action="login.php" method="POST">
        <label>Nombre:
            <input type="text" name="nombre" required>
        </label><br>
<!--        <label>Apellido:
            <input type="text" name="apellido" required>
        </label><br>
        <label>Edad:
            <input type="number" name="edad" required>
        </label><br> -->
        <label>Contraseña:
            <input type="password" name="clave" required>
        </label><br>
<!--        <label>Email:
                    <input type="text" name="email" required>
                </label><br>-->
        <input type="submit" value="Enviar">
    </form>
</body>
</html>