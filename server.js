var http  = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.end("<h1>Oá, Mundo!</h1>");
}).listen(3000);
console.log('localhost:3000');