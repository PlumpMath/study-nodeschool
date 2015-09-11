var url = process.argv[2],
    http = require('http'),
    bl = require('bl');

http.get(url, function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return null;
    }
    var text = data.toString('utf-8');
    console.log(text.length);
    console.log(text);
  }));
});
