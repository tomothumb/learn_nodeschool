var through2 = require('through2');
var stream = through2(write);

function write (buffer, encoding, callback) {
    // ...
    this.push(buffer.toString().toUpperCase());
    callback();
}

process.stdin.pipe(stream).pipe(process.stdout);
