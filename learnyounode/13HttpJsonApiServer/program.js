var http = require("http");
var url = require("url");
var port = Number(process.argv[2]);


var server = http.createServer(function(req,res){
    if(req.method != "GET"){
        return false;
    }

    var urlobj = url.parse( req.url, true);
    var query = urlobj.query;
    var pathname = urlobj.pathname;

    var date = new Date(query["iso"]);
    var result = {};

    //ルーティング
    if (pathname == "/api/parsetime" ) {
        //date
        result["hour"] = date.getHours();
        result["minute"] = date.getMinutes();
        result["second"] = date.getSeconds();
    }else if (pathname == '/api/unixtime') {
        result["unixtime"] = date.getTime()
    }
    //正規表現版
    //if (/^\/api\/parsetime/.test(req.url)){
    //    ....
    //}
    //else if (/^\/api\/unixtime/.test(req.url)){
    //    ....
    //}
    

    if(result){
        res.writeHead(200,{ 'Content-Type': 'application/json'});
        //response.write(chunk, [encoding])
        res.end(JSON.stringify(result));
    }else{
        res.writeHead(404);
        res.end();
    }

});
server.listen(port);





//file:///usr/local/lib/node_modules/learnyounode/node_apidoc/url.html

