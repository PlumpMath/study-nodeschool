var dir_path = process.argv[2],
    ext = process.argv[3],
    filter = require('./06-module-filter.js');

filter(dir_path, ext, function (err, data) {
  if (err) {
    console.error(err);
  }
  for (var i in data) {
    console.log(data[i]);
  }
});
