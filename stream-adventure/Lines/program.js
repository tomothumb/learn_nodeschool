var split = require('split');
var through2 = require('through2');

function write (line, _, callback) {
    if(cnt%2 == 1) {
        this.push(line.toString().toLowerCase()+"\n");
    }else{
        this.push(line.toString().toUpperCase()+"\n");
    }
    cnt++;
    //console.dir(line.toString());
    callback();
}


var cnt=1;
process.stdin
    .pipe(split())
    .pipe(through2(write))
    .pipe(process.stdout)
    ;
