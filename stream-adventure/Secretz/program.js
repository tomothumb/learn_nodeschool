var zlib = require("zlib");
var crypto = require("crypto");
var tar = require("tar");
var concat = require("concat-stream");

var parser = tar.Parse();
parser.on("entry",function(entry) {
   //console.log(entry);
    if(entry.type === 'File'){
        entry
            .pipe(crypto.createHash('md5', { encoding: 'hex' }))
            //.pipe(process.stdout)
            .pipe(concat(function (hash) {
                console.log(hash + ' ' + entry.path);
                })
            );
    }
    //
});

var cipher = process.argv[2];
var passphrase = process.argv[3];


process.stdin
    .pipe(crypto.createDecipher(cipher , passphrase))
    .pipe(zlib.createGunzip())
    .pipe(parser)
    //.pipe(crypto.createHash('md5', { encoding: 'hex' }))
    //.pipe(process.stdout)
;