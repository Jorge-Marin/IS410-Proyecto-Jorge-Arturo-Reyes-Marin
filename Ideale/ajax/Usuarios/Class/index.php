
<?php
    include_once('class-usuario.php');

    if($_SERVER['REQUEST_METHOD']=='POST'){

        $u = new Usuario(
            $_POST['firstname'],
            $_POST['lastname'],
            $_POST['email'],
            $_POST['password']);

        echo json_encode($u->createNewUser());
    }
    

    if($_SERVER['REQUEST_METHOD']=='GET' && isset($_GET['id'])){
        Usuario:: getUser($rutaArchivo,$_GET['id']);
    }

    
?>