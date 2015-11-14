var fs = require("fs");
var http = require("http");

var port = Number(process.argv[2]);
var file = process.argv[3];

//var server = http.createServer()();
var server = http.createServer(function(request, response){

    //res.writeHead(200, { 'content-type': 'text/plain' })

    stream = fs.createReadStream(file);
    stream.pipe(response);
});

server.listen(port);


//  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html
