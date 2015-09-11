var total = 0,
    data = process.argv.slice(2);
for (var i in data) {
  total += Number(data[i]);
}
console.log(total);

