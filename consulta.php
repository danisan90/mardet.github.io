<?php

$email = $_POST['emailV'];
$nombre = $_POST['nombreV'];
$empresa = $_POST['empresaV'];
$comentarios = $_POST['comentariosV'];

$fecha = date('d/m/Y', time());

// include remitente IP in the comentarios.
//$full_comentarios = $_SERVER['REMOTE_ADDR'] . "\n\n" . $IP;
//$IP= $full_comentarios;

$header = 'From: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Consulta de " . $nombre . ", realizada el " . $fecha . " \r\n";
$mensaje .= "E-mail: " . $email . " \r\n";
$mensaje .= "Empresa: " . $empresa . " \r\n";
$mensaje .= "Escribió: " . $comentarios . " \r\n";
#$mensaje .= "Referencias para contacto: " . " \r\n";



$para = 'danisanchez.90@gmail.com';

$asunto = 'Mardet S.R.L. - Consulta';

mail($para, $asunto, utf8_decode($mensaje), $header);

echo "<script type='text/javascript'>alert('Su mensaje ha sido enviado exitosamente');</script>";
echo "<script type='text/javascript'>window.location.href='http://mardet.com.ar';</script>";




//echo '&estatus=ok&';
?>
