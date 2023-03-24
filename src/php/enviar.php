<?php
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$mensaje = $_POST['comentarios'];
$tel = $_POST['tel'];
$para = 'servidor@aviplastic.com.mx';
$titulo = 'Desde La Pagina WEB';
$header = 'From: ' . $email;
$msjCorreo = "Nombre: $nombre Apellido: $apellido\n E-Mail: $email\n telefono: $tel\n Mensaje:\n $mensaje";
  
if ($_POST['submit']) {
if (mail($para, $titulo, $msjCorreo, $header)) {
echo "<script language='javascript'>
alert('Mensaje enviado, Nos comunicaremos a la brevedad');
window.location.href = 'https://www.abiplastic.com.mx';
</script>";
} else {
echo 'Falló el envio';
}
}
?>