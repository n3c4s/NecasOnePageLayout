<?php
require 'PHPMailer/PHPMailerAutoload.php';
$mail = new PHPMailer;
$to = "contacto@safetyinformatica.com"; //Correo de contacto
$from = 'Formulario de contacto web<contacto@safetyinformatica.com>';
// recoger datos form
$InputName = $_POST['InputName'];
$InputEmail = $_POST['InputEmail'];
$InputMessage =  nl2br($_POST['InputMessage']);

if($InputName == "" || $InputEmail == "" || $InputMessage == ""):
  echo '<div class="alert alert-danger"> Todos los campos son Requeridos</div>';
else:
  $mail->From = $from;
  $mail->addAddress($to);
  $mail->Subject = $InputName;
  $mail->isHtml(true);
  $mail->Body = '<strong>'.$InputEmail.'</strong> le ha contactado desde su web, y le ha enviado el siguiente mensaje: <br><p>'.$InputMessage.'</p>';
  $mail->CharSet = 'UTF-8';
  $mail->send();
endif;
?>
