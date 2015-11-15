var trumpet = require("trumpet");
var through = require("through2");

function write (buf, _, next) {
    this.push(buf.toString().toUpperCase() );
    next();
}
function end (done) { done(); }

var tr = trumpet();
var stream = tr.select(".loud").createStream();
stream.pipe(through(write, end)).pipe(stream);

process.stdin
    .pipe(tr)
    .pipe(process.stdout);


// NOTE
// ストリームのうち、一部のみ加工する場合、ストリームに戻す必要がある。
// stream.pipe(処理).pipe(stream);