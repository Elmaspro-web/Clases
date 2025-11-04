<?php

session_start();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Calculos</title>
</head>
<body>
    <main>
        <form action="./resolucion.php" method="post">
            <input type="text" name="numeroUno" id="numeroUno">
            <select name="operaciones" id="operaciones">
                <option value="suma">+</option>
                <option value="resta">-</option>
                <option value="multiplicacion">*</option>
                <option value="division">/</option>
            </select>
            <input type="text" name="numeroDos" id="numeroDos">
            <input type="submit">
        </form>

        <?php

        if (isset($_GET['resultado']))
        {
            echo "<br><hr><p>" . $_GET['resultado'] . "</p>";
            echo "<hr><p>" . $_GET['contador'] . "</p>";
        }

        ?>

    </main>
</body>
</html>