var http = require("http");
var map = require("through2-map");
var port = Number(process.argv[2]);

var server = http.createServer(function(req,res){
    if (req.method != 'POST')
        return res.end('send me a POST\n');

    req.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    }))
    .pipe(res);
});
server.listen(port);


// file:///usr/local/lib/node_modules/learnyounode/node_modules/through2-map
//  file:///usr/local/lib/node_modules/learnyounode/docs/through2-map.html
