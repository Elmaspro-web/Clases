<?php
use tools\Mailer;

require '../vendor/autoload.php';

    if ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($_POST)){
        Mailer::sendMail($_POST['remitente'], $_POST['destinatario'], $_POST['asunto'], $_POST['cuerpo'], $_POST['cc'], $_FILES['archivo']['tmp_name']);
    }

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Envio Email</title>
</head>
<body>
    <header>
        <h1>Enviar Emails</h1>
    </header>
    <main>
        <form action="" method="post" enctype="multipart/form-data">
            <label
            >Destinatario:
                <input type="email" name="destinatario" placeholder="El destinatario">
            </label><br>
            <label
            >Remitente:
                <input type="email" name="remitente" placeholder="El remitente">
            </label><br>
            <label
            >cc:
                <input type="email" name="cc" placeholder="Donde se envia la copia">
            </label><br>
            <label
            >Asunto:
                <input type="text" name="asunto" placeholder="Asunto:">
            </label><br>
            <label
            >Cuerpo:
                <input type="text" name="cuerpo" placeholder="Cuerpo:">
            </label><br>
            <label
            >Archivo:
                <input type="file" name="archivo" placeholder="Introduce el archivo">
            </label>
                <input type="submit" value="Enviar">
        </form>
    </main>
</body>
</html>
