<?php
$usuarioId  = $_POST['usuarioId'];
$modulo     = $_POST['modulo'];
$avaliacao  = $_POST['avaliacao'];
//$comentario = $_POST['comentario'];

if (!$usuarioId || !$modulo || !$avaliacao) {
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
$modulo     = $mysqli->real_escape_string($modulo);
$avaliacao  = $mysqli->real_escape_string($avaliacao);
//$comentario = $mysqli->real_escape_string($comentario);

$sql = "INSERT INTO `rating` (`id`, `usuario_id`, `modulo`, `avaliacao`, `comentario`, `data_criacao`) VALUES (NULL, '$usuarioId', '$modulo', $avaliacao, NULL, CURRENT_TIMESTAMP);";
$mysqli->query($sql);

mysqli_close($link);
    
exit('OK');
