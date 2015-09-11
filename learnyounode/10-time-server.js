var net = require('net'),
    port = process.argv[2],
    server;

function fill_zero(n) {
  n = Number(n);
  if (n < 10) {
    return "0" + String(n);
  } else {
    return String(n);
  }
}

function get_date() {
  var date = new Date();
  return date.getFullYear() + "-" +
    fill_zero(date.getMonth() + 1) + "-" +
    fill_zero(date.getDate()) + " " +
    fill_zero(date.getHours()) + ":" +
    fill_zero(date.getMinutes());
}

function serve(socket) {
  socket.write(get_date());
  socket.write('\n');
  socket.end();
}

server = net.createServer(serve);
server.listen(port)

