<?php

    session_start();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Formulario del Hobby</title>
</head>
<body>
    <main>
        <form action="./validacion.php" method="post">
            <label for="usuario">Usuario: </label>
            <input type="text" name="usuario" id="usuario">
            <label for="contraseña">Contraseña: </label>
            <input type="password" name="contraseña" id="contraseña">
            <input type="submit" value="Iniciar Sesión">
        </form>
    </main>
</body>
</html>
