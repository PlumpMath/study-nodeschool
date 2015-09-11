var fs = require('fs'),
    path = require('path');

module.exports = function (dir_path, ext, callback) {
  ext = '.' + ext;
  fs.readdir(dir_path, function (err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, data.filter(function (elm) {
      return path.extname(elm) == ext;
    }));
  });
}

