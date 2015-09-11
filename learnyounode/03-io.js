"use strict"

var fs = require('fs'),
    file_path = process.argv[2],
    buffer,
    text,
    n_lines;

buffer = fs.readFileSync(file_path);
text = buffer.toString();
n_lines = text.split('\n').length - 1;

console.log(n_lines);
