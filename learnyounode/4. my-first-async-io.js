/* Program to use single asynchronous filesystem operation to read a file and print number of newlines (\n) */

/* Solution 1 */

fs.readFile(process.argv[2],'utf8',function (error,filecontents){
 	var lines = filecontents.split('\n');
   	console.log(lines.length - 1 );
});

/* Solution 2 */

const fs = require('fs');
const file = process.argv[2];
const finishReading = (error, contents) => {
	if(error) throw error;
	console.log(contents.split("\n").length - 1);
}
fs.readFile(file, 'utf-8', finishReading);

