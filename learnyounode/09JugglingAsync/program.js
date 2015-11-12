var http = require("http");
var bl = require("../node_modules/bl")

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var contents = [];

http.get(url1, comp);


function comp(res){
    res.pipe(bl(function(err, data) {
        if(err){
            return err;
        }
        data = data.toString();
        console.log(data);
        http.get(url2, comp2);
        return data;
    }));
}

function comp2(res){
    res.pipe(bl(function(err, data) {
        if(err){
            return err;
        }
        data = data.toString();
        console.log(data);
        http.get(url3, comp3);
        return data;
    }));
}
function comp3(res){
    res.pipe(bl(function(err, data) {
        if(err){
            return err;
        }
        data = data.toString();
        console.log(data);
        return data;
    }));
}