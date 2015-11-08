var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function (err, files) {
        if (err)
            return callback(err);

        var filteredFiles = [];
        files.forEach(function (file, idx, files) {
            if (path.extname(file) === "." + ext) {
                filteredFiles.push(file);
            }
        });

        //same as bellow
        //filteredFiles = files.filter(function(file){
           //return (path.extname(file) === "." + ext)
        //});

        callback(err, filteredFiles);
    });

};
