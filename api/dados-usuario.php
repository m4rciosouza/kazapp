<?php
$usuarioId  = $_POST['usuarioId'];
$dadosMail  = $_POST['mail'];
$dados      = $_POST['dados'];

if (!$usuarioId || !$dadosMail || !$dados) {
    exit('Dado(s) de entrada inválido(s).');
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

$sql = "INSERT INTO `dados_usuario` (`id`, `usuario_id`, `mail`, `dados`, `data_criacao`) VALUES (NULL, '$usuarioId', '$dadosMail', '$dados', CURRENT_TIMESTAMP);";

$mysqli->query($sql);

mysqli_close($link);
    
exit('OK');
