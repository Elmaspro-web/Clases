<?php

if (isset($_POST["lang"])) {
    $lang = $_POST["lang"];
    setcookie("lang", $_POST["lang"], time() + 3600);
} elseif (isset($_COOKIE["lang"])) {
    $lang = $_COOKIE["lang"];
} else {
    $lang = "ES";
}

$idioma = [
        "ES" => "ESPAÑOL",
        "EN" => "ENGLISH",
        "FR" => "FRANÇAIS",
        "ZU" => "ISIZULU",
        "JP" => "日本語",
];
include("visita_app.php")

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <center>
            <h1><?= $idioma[$lang] ?></h1>
            <?php echo $mensaje;?>
            <hr>
            <form method="post">
                <select name="lang" onchange="this.form.submit()">
                    <option>Elige el idioma</option>
                    <option value="ES">Español</option>
                    <option value="EN">Inglés</option>
                    <option value="FR">Francés</option>
                    <option value="ZU">Zulu</option>
                    <option value="JP">Japonés</option>
                </select>
            </form>
        </center>
    </header>
</body>
</html>