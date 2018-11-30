/* Program to use single synchronous filesystem operation to read a file and print number of newlines (\n) */

const fs = require('fs');

let data = fs.readFileSync(process.argv[2]).toString();

console.log(data.split("\n").length - 1);
