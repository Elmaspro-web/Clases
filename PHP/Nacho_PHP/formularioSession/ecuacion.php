<?php

session_start();

if (isset($_GET['resultado']))
{
    echo "Esta es la quinta operación: <br>";
    echo "<p>" . $_GET['resultado'] . "</p>";
    if (isset($_GET['contador']))
    {
        echo "<hr><p>" . $_GET['contador'] . "</p>";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ecuación</title>
</head>
<body>
<a href="./calculos.php">Volver a calculos</a><br>
<a href="./cerrarSesion.php">Cerrar Sesión</a><br>

<form action="" method="post"><br>
    <label>a:
        <input type="number" name="a">
    </label><br>
    <label>b:
        <input type="number" name="b">
    </label><br>
    <label>c:
        <input type="number" name="c">
    </label><br><br>
    <input type="submit" name="submit" style="margin-left: 1%">
</form>
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $a = (int) $_POST['a'];
    $b = (int) $_POST['b'];
    $c = (int) $_POST['c'];
    $discriminante=pow($b, 2)-4*$a*$c;
        $x1=(-$b+sqrt($discriminante))/(2*$a);
        $x2=(-$b-sqrt($discriminante))/(2*$a);
        echo "<p>Por suma $x1 </p>";
        echo "<p>Por resta $x2 </p>";
}
?>
</body>
</html>
