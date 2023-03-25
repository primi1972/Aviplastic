<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $titulo = "Desde La Pagina WEB";
    $from = "contacto@abiplastic.com.mx";
    $para = "contacto@abiplastic.com.mx, servidor@abiplastic.com.mx";
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $direccion =$_POST['direccion'];
    $tel = $_POST['tel'];
    $mensaje = $_POST['comentarios'];

    
    $msjCorreo = "
    Nombre: $nombre \n E-Mail: $email \n Telefono: $tel \n Direccion: $direccion\n  Mensaje: $mensaje \n";
    $headers = "De:" . $from;
    mail($para, $titulo, $msjCorreo, $headers);
?>


<script>
    alert ("El correo se ha enviado nos comunicaremos a la brevedad");    
    javascript:window.history.back();
</script>