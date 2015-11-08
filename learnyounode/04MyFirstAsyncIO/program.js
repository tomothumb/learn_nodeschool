var fs = require('fs');

var path = process.argv[2];

var str = fs.readFile(path,function(err, data){
    if (err) throw err;
    var str = data.toString();
    var lines = str.split("\n");

    //console.log(option);
    console.log(lines.length-1);

});


// @note: fs (file system)
//file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html


// @note: buffer
//file:///usr/local/lib/node_modules/learnyounode/node_apidoc/buffer.html
