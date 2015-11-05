var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();

var lines = str.split("\n");
console.log(lines.length-1);

// @note: fs (file system)
//file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html


// @note: buffer
//file:///usr/local/lib/node_modules/learnyounode/node_apidoc/buffer.html
