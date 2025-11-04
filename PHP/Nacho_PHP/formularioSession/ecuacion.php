
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ecuación</title>
</head>
<body>
<a href="./calculos.php">Volver a calculos</a><br>
<a href="./cerrarSesion.php">Cerrar Sesión</a><br>

<form action="" method="post">
    <label>a:
        <input type="number" name="a">
    </label>
    <label>b:
        <input type="number" name="b">
    </label>
    <label>c:
        <input type="number" name="c">
    </label>
    <input type="submit" name="submit">
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
