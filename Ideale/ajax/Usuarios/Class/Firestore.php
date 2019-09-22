<?php 

    require_once __DIR__.'/../../../vendor/autoload.php';
    use Google\Cloud\Firestore\FirestoreClient;

    class Firestore{
        protected $db;
        protected $name;

        public function __construct(string $collection){
            $this->db = new FirestoreClient([
                'projectId' => 'ideale-is410'
            ]);

            $this->name = $collection;
        }

        
        public function getDocument(string $name){
            try{
                if($this->db->collection($this->name)->document($name)->snapshot()->exists()){
                    return $this->db->collection($this->name)->document($name)->snapshot()->data();
                }else{
                    throw new Exception('Document are not Exist');
                }
            }catch(Exception $exception){
                return $exception->getMessage();
            }
        }

        public function getWhere(string $field, string $operator, $value){
            $arr = [];

            $query = $this->db->collection($this->name)->where($field, $operator, $value)->documents()->rows();
            if(!empty($query)){
                foreach($query as $item){
                    $arr[] = $item->data();
                }
            }

            return sizeof($arr);
        }

        public function createDocument(array $data =[]){
            try{
                $this->db->collection($this->name)->add($data);
                return true;
            }catch(Exception $exception){
                return $exception->getMessage();
            }
        }

        public function createCollection(string $name, string $doc_name, array $data = []){
            try{
                $this->db->collection($name)->document($doc_name)->create($data);
                return true;
            }catch(Exception $exception){
                return $exception->getMessage();
            }
        }

        public function deleteDocument(string $name){
            $this->db->collection($this->name)->document($name)->delete();
        }

        public function deleteCollection(string $name){
            $documents = $this->db->collection($name)->limit(1)->documents();
            while(!$documents->isEmpty()){
                foreach($documents as $item){
                    $item->reference()->delete();
                }
            }
        }
    }
?>