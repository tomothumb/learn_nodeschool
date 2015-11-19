var crypto = require("crypto");

var input = process.argv[2];
var stream = crypto.createDecipher('aes256', input);

process.stdin
    .pipe(stream)
    .pipe(process.stdout)
    ;