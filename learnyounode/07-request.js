var url = process.argv[2],
    http = require('http');

http.get(url, function (response) {
  response
    .setEncoding('utf-8')
    .on('data', function (body) {
      console.log(body);
    })
    .on('error', function (err) {
      console.error(err);
    });
});

