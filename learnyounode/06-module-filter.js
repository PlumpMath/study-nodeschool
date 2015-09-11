var path = require('path'),
    fs = require('fs');

module.exports = function (dir_path, ext, callback) {
  fs.readdir(dir_path, function (err, list) {
    if (err) {
      return callback(err);
    }
    ext = '.' + ext;
    return callback(null, list.filter(function (elm) {
      return (path.extname(elm) == ext);
    }));
  });
}

