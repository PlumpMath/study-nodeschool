var http = require('http'),
    bl = require('bl'),
    urls = process.argv.slice(2),
    synced = 0;

function print_buffer(data) {
  console.log(data.toString('utf-8'));
}

function wait(i, data) {
  if (synced == i) {
    print_buffer(data);
    ++synced;
  } else {
    setTimeout(function () {
      wait(i, data);
    }, 10);
  }
}

function get(i) {
  http.get(urls[i], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return null;
      }
      wait(i, data);
    }));
  });
}

for (var i in urls) {
  get(i);
}

