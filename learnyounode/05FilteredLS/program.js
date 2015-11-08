var fs = require('fs');
var path = require('path');
var ext = process.argv[3];


fs.readdir(process.argv[2], function(err, files){
    var lines;
    files.forEach(function(file, idx, files){

        //console.log(path.extname(file).substr(1,path.extname(file).length) );
        if( path.extname(file) === "." + ext ) {
            console.log(file);
            //continue;
        }
    }) ;

});


//  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/path.html
