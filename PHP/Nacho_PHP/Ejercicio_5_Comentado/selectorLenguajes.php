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
        echo match ($_GET["lang"]) {
            "ES" => "<center><h1>ESPAÑOL</h1></center>",
            "EN" => "<center><h1>ENGLISH</h1></center>",
            "FR" => "<center><h1>FRANCE</h1></center>",
            "ZU" => "<center><h1>ZULU</h1></center>",
            "JP" => "<center><h1>JAPAN</h1></center>",
            default => "<center><h1>Select a lenguaje</h1></center>",
        };
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