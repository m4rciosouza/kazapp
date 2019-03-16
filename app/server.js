var express = require('express'); 
var server = express();
server.use(express.static(__dirname + '/src'));
server.listen(3000);
console.log('Servidor inicializado na porta 3000.');
