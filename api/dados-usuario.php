<?php
$usuarioId  = $_POST['usuarioId'];
$dadosMail  = $_POST['mail'];
$dados      = $_POST['dados'];

if (!$usuarioId || !$dadosMail || !$dados) {
    exit('Dado(s) de entrada inválido(s).');
}

if (strlen($usuarioId) < 10) {
    exit("Erro");
}

$config = parse_ini_file('config/app-dev.ini');

$mysqli = mysqli_connect(
    $config['db']['url'], 
    $config['db']['usuario'], 
    $config['db']['senha'], 
    $config['db']['bd']
);

if (!$mysqli) {
    echo "Error: problema ao acessar o MySQL." . PHP_EOL;
    exit;
}

$usuarioId  = $mysqli->real_escape_string($usuarioId);
$dadosMail  = $mysqli->real_escape_string($dadosMail);
$dados      = $mysqli->real_escape_string($dados);

$id = false;
$sql = "SELECT id FROM dados_usuario WHERE id_usuario = '$usuarioId'";
if ($result = $mysqli->query($sql)) {
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_object()){
            $id = $row->id;
        }
    }
    $result->close();
}

if ($id) {
    $sql = "UPDATE `dados_usuario` SET `id_usuario` = '$usuarioId', `mail` = '$dadosMail', `dados` = '$dados' WHERE `dados_usuario`.`id` = $id";
} else {
    $sql = "INSERT INTO `dados_usuario` (`id`, `id_usuario`, `mail`, `dados`, `data_criacao`) VALUES (NULL, '$usuarioId', '$dadosMail', '$dados', CURRENT_TIMESTAMP);";
}

$mysqli->query($sql);

mysqli_close($mysqli);
    
exit('OK');
