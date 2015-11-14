var net = require('net')

//console.log(process.argv[2]);
function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
}

var server = net.createServer(function (socket) {
    // socket handling logic
    date = new Date();

    data =
        date.getFullYear()+"-"+
        zeroFill(date.getMonth()+1)+ "-"+
        zeroFill(date.getDate())+" "+
        zeroFill(date.getHours())+":"+
        zeroFill(date.getMinutes())
    ;
    //socket.write(data);
    socket.end(data);
})
server.listen(process.argv[2],function(){


});


//  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/net.html
