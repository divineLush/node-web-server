var http = require('http');
var fs = require('fs');
var moment = require('moment');

// createServer takes a callback
// which is an event listener
// this function will be called when
// the server object emits an event
http.createServer(function(request, response) {
    // http response starts with what's is in the head

    switch(request.url) {
        case '/':
            // response is a stream so I can pipe it
            fs.createReadStream(__dirname + '/index.htm').pipe(response);
            break;
        case '/api':
            response.writeHead(200, { 'Content-Type': 'application/json' });
            var obj = {
                firstName: 'John',
                lastName: 'Doe',
                date: moment().format('ddd, hA'),
            };
            response.end(JSON.stringify(obj));
            break;
        default:
            response.writeHead(404);
            response.end();
    }
}).listen(1337, '127.0.0.1');
// .listen(port, hostname)