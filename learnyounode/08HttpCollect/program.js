var http = require("http");
var bl = require("../node_modules/bl/");

http.get(process.argv[2],function(res) {
    //res.setEncoding("utf8");

    res.pipe(bl(function(err, data) {
        if(err){
            return console.log(err);
        }
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));

})