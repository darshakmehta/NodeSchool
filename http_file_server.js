var http = require('http')
var fs = require('fs')

port = process.argv[2],
path = process.argv[3];

var server = http.createServer(function(request, response){
    var file = fs.createReadStream(path);
    file.pipe(response);
});

server.listen(port);