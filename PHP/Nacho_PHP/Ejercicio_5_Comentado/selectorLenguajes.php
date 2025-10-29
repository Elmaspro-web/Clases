<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <header>
        <?php
        $visitas = 0;
        $lang = $_GET["lang"] ?? null;
        echo match ($lang) {
            "ES" => "<center><h1>ESPAÑOL</h1></center>",
            "EN" => "<center><h1>ENGLISH</h1></center>",
            "FR" => "<center><h1>FRANÇAIS</h1></center>",
            "ZU" => "<center><h1>ISIZULU</h1></center>",
            "JP" => "<center><h1>日本語</h1></center>",
            default => "<center><h1>Select a lenguaje</h1></center>",
        };
        if(!isset($_COOKIE["visitas"]))
        {
            setcookie("visitas", "1", time() + 3600);
            echo "BIENVENIDO";
        }
        else
        {
            $visitas = $_COOKIE["visitas"];
            $visitas++;
            setcookie("visitas", $visitas, time() + 3600);
            echo "VISITA: $visitas";
        }

        if ($visitas >= 10)
        {
            echo "<br>";
            echo "Cookie eliminada. Reseteando el contador de visitas.";
            setcookie("visitas", "", time() - 3600);
        }
        ?>
<center>
        <nav>
            <ul>
                <li><a href="?lang=ES" style="text-decoration: none">Español</a></li>
                <li><a href="?lang=EN" style="text-decoration: none">Inglés</a></li>
                <li><a href="?lang=FR" style="text-decoration: none">Francés</a></li>
                <li><a href="?lang=ZU" style="text-decoration: none">Zulu</a></li>
                <li><a href="?lang=JP" style="text-decoration: none">Japonés</a></li>
            </ul>
        </nav>
</center>
    </header>
</body>
</html>