var http = require('http'),
    map = require('through2-map'),
    port = process.argv[2],
    server;

function to_uppercase(data) {
  return data.toString().toUpperCase();
}

function serve(request, response) {
  request.pipe(map(to_uppercase)).pipe(response);
}

server = http.createServer(serve);
server.listen(port);

