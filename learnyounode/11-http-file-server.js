var http = require('http'),
    fs = require('fs'),
    port = process.argv[2],
    path = process.argv[3],
    server;

function serve(request, response) {
  var frs = fs.createReadStream(path);
  frs.pipe(response);
}

server = http.createServer(serve);
server.listen(port);

