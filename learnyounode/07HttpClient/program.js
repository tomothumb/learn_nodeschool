var http = require("http");

http.get( process.argv[2], function(response) {
    //response.on("data", function (data) {
    //    console.log(data.toString());
    //});

    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)

});

//})


//  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html
