var fs = require('fs'),
    file_path = process.argv[2];

function callback_count(err, data) {
  var n_lines;
  if (err) {
    return null;
  }
  n_lines = data.split('\n').length - 1;
  console.log(n_lines);
}

fs.readFile(file_path, 'utf-8', callback_count);
