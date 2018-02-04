//criando uma porta http nodejs
var http = require('http');
var mod = require('./mod');
var name = require('./name');

function navegador(req, resp){
    resp.end('Hello from http module');
}
var server = http.createServer(navegador);
//Escolhendo a porta 
server.listen(3000, function(){
    console.log('Porta 3000 Liberada Com Sucesso');
});




//primeiro projeto em Node.js
// console.log('Hello World');

// var a = 3;
// var b =2;
// var c = a + b;
// console.log('c->', c);