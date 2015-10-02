var fs = require('fs');
var z = fs.readFileSync(process.argv[2]);
var s=z.toString();
var a = s.split('\n');

console.log(a.length - 1);

