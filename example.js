var http = require('http');

var node_oauth = require('node-oauth');
console.log(node_oauth);

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('The area of a circle of radius 4 is ' + circle.area(4));
  //response.end('Hello World\n');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');

