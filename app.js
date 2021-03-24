var http = require('http');
var fs = require('fs');

// createServer takes a callback
// which is an event listener
// this function will be called when
// the server object emits an event
http.createServer(function(request, response) {
    // http response starts with what's is in the head
    // writeHead(status code, headers)
    response.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
    var message = 'Hello world';
    html = html.replace('{Message}', message);
    response.end(html);
}).listen(1337, '127.0.0.1');
// .listen(port, hostname)