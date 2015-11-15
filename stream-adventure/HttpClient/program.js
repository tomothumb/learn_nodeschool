//var http = require("http");
var request = require("request");

//var server = http.createServer(function(req, res){});
//server.listen(8099);

process.stdin
    .pipe(request.post("http://localhost:8099"))
    .pipe(process.stdout)
;