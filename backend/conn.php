<?php 
$mysqli = new mysqli('localhost', 'root', 'unisuam123', 'mydb');

if($mysqli->error){
    echo 'erro';
} else{
    echo 'deu bom';
}