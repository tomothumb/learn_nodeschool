var combine = require('stream-combiner')
var split = require("split");
var zlib = require("zlib");
//var es = require('event-stream');
var through = require("through2");

var bookgroup;

function write (buf, _, next) {

    if (buf.length === 0) return next();

    var row = JSON.parse(buf);

    if (row.type === "genre") {
        if( bookgroup ) {
            //console.log(bookgroup);
            this.push( JSON.stringify( bookgroup)+"\n");
        }
        bookgroup = {name: row.name, books:[] };

    }
    else if (row.type=="book") {
        bookgroup.books.push(row.name);
    }
    next();
}
function end (done) {
    this.push( JSON.stringify( bookgroup)+"\n");
    done();
}


module.exports = function () {


    return combine(
        split(),
        through(write,end),
        //function (data) {      // turn this async function into a stream
        //    //var repr = util.inspect(JSON.parse(data))  // render it nicely
        //    //callback(null, repr)
        //    console.log(data)
        //},
        zlib.createGzip()
        // read newline-separated json,
        // bookgroup books into genres,
        // then gzip the output
        //process.stdout
    )
}
