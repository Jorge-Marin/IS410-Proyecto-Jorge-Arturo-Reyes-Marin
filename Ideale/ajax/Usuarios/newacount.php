<?php

    include_once('Class/class-usuario.php');
    
    if($_SERVER['REQUEST_METHOD']=='POST'){
        

        $u = new Usuario(
            $_POST['firstname'],
            $_POST['lastname'],
            $_POST['email'],
            $_POST['password']);
        $u->createUser($rutaArchivo);
    }
    
?>