<?php
include_once('conn.php');

var_dump($_POST);

$nome = $_POST['nome'];
$cpf= $_POST['cpf'];
$nome_materno = $_POST['nome_materno'];
$endereco = $_POST['endereco'];

if($_SERVER['REQUEST_METHOD'] == 'POST'){
// prepare evita o sql injection
    $query_select = $mysqli->prepare(" select * from clientes where cpf = ?");
    $query_select->bind_param("s",$cpf); // bind_para substitui o ? pela variavel | ("tipo da variavel", $variavel)
    $query_select->execute();
    $query_select->store_result();

    if($query_select->num_rows()>=1){ // num_rows = numero de linhas retornaveis
        header("location:../telecall.html"); // usado para redirecionar 
    }

    else{
        $query_insert = $mysqli->prepare(" insert into clientes (nome, nome_materno, cpf, endereco) values(?, ?, ?, ?)");
        $query_insert->bind_param("ssss",$nome, $nome_materno ,$cpf, $endereco);
        $query_insert->execute();
        $query_insert->close();

        header('location: ../');
    }
        

}