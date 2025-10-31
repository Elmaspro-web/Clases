<?php

if (isset($_POST["lang"])) {
    setcookie("lang", $_POST["lang"], time() + 3600);
    $lang = $_POST["lang"];
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

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <header>
        <center>
            <h1><?= $idioma[$lang] ?></h1>

            <form method="post">
                <select name="lang" onchange="this.form.submit()">
                    <option value="ES" <?= $lang == "ES" ? "selected" : "" ?>>Español</option>
                    <option value="EN" <?= $lang == "EN" ? "selected" : "" ?>>Inglés</option>
                    <option value="FR" <?= $lang == "FR" ? "selected" : "" ?>>Francés</option>
                    <option value="ZU" <?= $lang == "ZU" ? "selected" : "" ?>>Zulu</option>
                    <option value="JP" <?= $lang == "JP" ? "selected" : "" ?>>Japonés</option>
                </select>
            </form>
        </center>
    </header>
</body>
</html>