var http = require('http'),
    url = require('url'),
    port = process.argv[2],
    server;

function serve(request, response) {
  var request_data = url.parse(request.url, true),
      api = request_data.pathname,
      query = request_data.query,
      date, json;
  if (api == '/api/parsetime') {
    response.writeHeader(200, 'plain/text');
    date = new Date(query.iso);
    json = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
    response.write(JSON.stringify(json));
  }
  if (api == '/api/unixtime') {
    response.writeHeader(200, 'plain/text');
    date = new Date(query.iso);
    json = {
      unixtime: date.getTime()
    };
    response.write(JSON.stringify(json));
  }
  response.end();
}

server = http.createServer(serve);
server.listen(port);
