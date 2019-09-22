<?php 

    header('Content-Type: application/json'); // Tipod MIME
    require_once 'Firestore.php';

    //Inicializa la Colleccion Usuarios Desde El Constructos
    

    // This assumes that you have placed the Firebase credentials in the same directory
    // as this PHP file.

    class Usuario extends Firestore{
        protected $fs;
        private $firstname;
        private $lastname;
        private $email;
        private $password;
    
        public function __construct(
            $firstName,
            $lastName,
            $email,
            $password  
        ){
            $this->firstname = $firstName;
            $this->lastname = $lastName;
            $this->email = $email;
            $this->password = $password;

            $this->fs = new Firestore('Usuarios');
        }

        public function __toString(){
            return json_encode($this->getData());
        }

        public function createNewUser(){
            if($this->getReferenceId()>0){
                return 'exists';
            }else{
                $this->fs->createDocument($this->getData());
                return true;
            }
            
        }

        public function getReferenceId(){
            return $this->fs->getWhere('email','=',$this->email);
        }

        public function getData(){
            $documentData['firstname'] = $this->firstname;
            $documentData['lastname'] = $this->lastname;
            $documentData['email'] = $this->email;
            $documentData['password'] = $this->password;
            return $documentData;            
        }


    }


    /*if (empty($data) || !isset($data)) { return FALSE; }
    foreach ($data as $key => $value){
        $this->database->getReference()->getChild($this->dbname)->getChild($key)->set($value);
    }
    return TRUE;*/