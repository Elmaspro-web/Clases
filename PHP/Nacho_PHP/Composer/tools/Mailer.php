<?php
namespace tools;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
class Mailer
{
    public static function sendMail($remitente, $destinatario, $cc = null, $path = null)
    {
        $mail = new PHPMailer(true);
        try {
            $contador++;
            //Server settings
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'ignaciolangarica68@gmail.com';                     //SMTP username
            $mail->Password   = 'vygn yldh xzuq qjww';                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //Enable implicit TLS encryption
            $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

            //Recipients
            $mail->setFrom($remitente, 'Mailer');
            $mail->addAddress($destinatario);     //Add a recipient
            $mail->addCC($cc);

            //Attachments
            $mail->addAttachment($path);         //Add attachments

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = 'Ejercicio Auto-Gmail PHP';
            $mail->Body    = 'Me envío un pdf mediante PHPMailer';
            $mail->AltBody = 'Me envío un pdf mediante PHPMailer';

            $mail->send();
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }

}