var ext = process.argv[3];
var dir = process.argv[2];

var mymodule = require('./module.js');



mymodule(dir, ext, function (err, files) {
    if(err)
        return console.log(err);
    files.forEach(function (file, idx, files) {
        console.log(file);
    });
});
