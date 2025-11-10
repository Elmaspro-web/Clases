<?php
use tools\Mailer;

//Load Composer's autoloader (created by composer, not included with PHPMailer)
require '../vendor/autoload.php';

Mailer::sendMail("ignaciolangarica68@gmail.com", "luisgarciacapilla1@gmail.com", "luisgarciacapilla1@gmail.com","../public/Examen Tema 2.pdf");