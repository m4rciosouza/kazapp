<?php
$usuarioId  = $_GET['usuarioId'];

if (!$usuarioId) {
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

$dadosUsuario = [];
$sql = "SELECT usuario_id, mail, dados FROM dados_usuario WHERE usuario_id = '$usuarioId'";
if ($result = $mysqli->query($sql)) {
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_object()){
            $dadosUsuario['usuario_id'] = $row->usuario_id;
            $dadosUsuario['mail'] = $row->mail;
            $dadosUsuario['dados'] = $row->dados;
        }
    }
    $result->close();
}

mysqli_close($link);
    
exit(json_encode($dadosUsuario));